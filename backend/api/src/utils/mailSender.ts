import nodemailer from "nodemailer";

export const sendEmail = async (toEmail: string, otp: string): Promise<void> => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: toEmail,
        subject: "Your Opinix OTP Code",
        text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${toEmail}`);
}

