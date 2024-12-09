"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyOTP = exports.requestOTP = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = __importDefault(require("../db/db"));
const otpGenerator_1 = require("../utils/otpGenerator");
const mailSender_1 = require("../utils/mailSender");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const RedisManager_1 = require("../RedisManager");
const types_1 = require("../types/types");
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const requestOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({
            error: "Email is required"
        });
        return;
    }
    const otp = (0, otpGenerator_1.generateOTP)();
    const otpHash = yield bcrypt_1.default.hash(otp, 10);
    const expiry = new Date(Date.now() + 5 * 60 * 1000);
    try {
        const user = yield db_1.default.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            const createdUser = yield db_1.default.user.create({
                data: {
                    email,
                    otpHash,
                    expiry
                }
            });
            const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
                type: types_1.CREATE_USER,
                data: {
                    userId: createdUser.id
                }
            });
        }
        yield db_1.default.user.update({
            where: {
                email
            },
            data: {
                expiry,
                otpHash
            }
        });
        yield (0, mailSender_1.sendEmail)(email, otp);
        res.status(200).json({
            message: "OTP sent successfully!"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Failed to send OTP"
        });
    }
});
exports.requestOTP = requestOTP;
const verifyOTP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp } = req.body;
    if (!email || !otp) {
        res.status(400).json({
            error: "Email and OTP are required"
        });
    }
    try {
        const user = yield db_1.default.user.findUnique({
            where: {
                email
            },
        });
        if (!(user === null || user === void 0 ? void 0 : user.expiry)) {
            res.status(400).json({
                error: "Request a new one"
            });
            return;
        }
        if ((user === null || user === void 0 ? void 0 : user.expiry) < new Date) {
            res.status(400).json({
                error: "OTP has been expired. Request  a new one."
            });
            return;
        }
        const isMatch = yield bcrypt_1.default.compare(otp, user.otpHash);
        if (!isMatch) {
            res.status(400).json({
                error: "Invalid OTP"
            });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
            email: user.email
        }, JWT_SECRET, { expiresIn: '8h' });
        res.status(200).json({
            message: "Login successfull",
            token
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Failed to verify OTP"
        });
    }
});
exports.verifyOTP = verifyOTP;
