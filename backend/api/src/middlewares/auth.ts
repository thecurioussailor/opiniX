import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;
    const jwtToken = authToken?.split(" ")[1];

    if(!jwtToken){
        res.status(401).json({
            error: "Access token is missing."
        })
        return
    }

    try{
        const user = jwt.verify(jwtToken, JWT_SECRET);
        (req as any).user = user;
        next();
    }catch(error){
        res.status(403).json({
            error: "Invalid or expired token"
        })
    }
}