import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./router/user.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/users/", userRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("connected db"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running");
});
