"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const otpController_1 = require("../controllers/otpController");
const router = (0, express_1.Router)();
router.post('/request-otp', otpController_1.requestOTP);
router.post('/verify-otp', otpController_1.verifyOTP);
exports.default = router;
