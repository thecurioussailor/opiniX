import express from "express";
import otpRoutes from "./routes/otpRoutes"
const app = express();

app.use(express.json());

app.use('/api/v1/otp', otpRoutes);

app.listen(3000, () => {
    console.log("server started on port 3000");
})