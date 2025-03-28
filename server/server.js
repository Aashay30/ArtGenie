import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";

import connectdb from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "../server/routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

await connectdb();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log("Server running on port " + PORT));
