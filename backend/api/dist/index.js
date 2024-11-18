"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const otpRoutes_1 = __importDefault(require("./routes/otpRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1/otp', otpRoutes_1.default);
app.listen(3000, () => {
    console.log("server started on port 3000");
});
