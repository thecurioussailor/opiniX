import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/v1/', routes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log("server started on port " + port);
})