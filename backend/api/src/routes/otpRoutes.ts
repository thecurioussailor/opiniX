import { Router } from "express";
import { requestOTP, verifyOTP } from "../controllers/otpController";

const router = Router();

router.post('/request-otp', requestOTP);
router.post('/verify-otp', verifyOTP);

export default router;