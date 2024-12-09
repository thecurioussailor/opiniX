"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const userMiddleware = (req, res, next) => {
    const authToken = req.headers.authorization;
    const jwtToken = authToken === null || authToken === void 0 ? void 0 : authToken.split(" ")[1];
    if (!jwtToken) {
        res.status(401).json({
            error: "Access token is missing."
        });
        return;
    }
    try {
        const user = jsonwebtoken_1.default.verify(jwtToken, JWT_SECRET);
        req.user = user;
        next();
    }
    catch (error) {
        res.status(403).json({
            error: "Invalid or expired token"
        });
    }
};
exports.userMiddleware = userMiddleware;
