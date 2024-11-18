import { Request, Response } from "express"
import bcrypt from "bcrypt";
import prisma from "../db/db"
import { generateOTP } from "../utils/otpGenerator";
import { sendEmail } from "../utils/mailSender";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const requestOTP = async (req: Request, res: Response) => {
    const { email } = req.body;

    if(!email){
        res.status(400).json({
            error: "Email is required"
        })
        return
    }

    const otp = generateOTP();
    const otpHash = await bcrypt.hash(otp, 10);
    const expiry = new Date(Date.now() + 5*60*1000);

    try{

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user){
            await prisma.user.create({
                data: {
                    email,
                    otpHash,
                    expiry
                }
            });
        }

        await prisma.user.update({
            where: {
                email
            },
            data: {
                expiry,
                otpHash
            }
        })

        await sendEmail(email, otp);
        res.status(200).json({
            message: "OTP sent successfully!"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: "Failed to send OTP"
        });
    }

}

export const verifyOTP = async (req: Request, res: Response) => {
    const {email, otp} = req.body;

    if(!email || !otp){
        res.status(400).json({
            error: "Email and OTP are required"
        });
    }

    try{
        const user = await prisma.user.findUnique({
            where: {
                email
            },
        })

        if(!user?.expiry){
            res.status(400).json({
                error: "Request a new one"
            })
            return
        }
        if(user?.expiry < new Date){
            res.status(400).json({
                error: "OTP has been expired. Request  a new one."
            })
            return
        }

        const isMatch = await bcrypt.compare(otp, user.otpHash);

        if(!isMatch){
            res.status(400).json({
                error: "Invalid OTP"
            });
        }

        const token = jwt.sign({
            userId: user.id,
            email: user.email
        }, JWT_SECRET, {expiresIn: '8h'});

        res.status(200).json({
            message: "Login successfull", 
            token
        })
        
    }catch(error){
        console.error(error);
        res.status(500).json({
            error: "Failed to verify OTP"
        });
    }
}