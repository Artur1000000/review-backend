import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import AuthRouter from "./src/routes/AuthRouter.js";
import RegRouter from "./src/routes/RegRouter.js";
import ForgotPassRouter from "./src/routes/ForgotPassRouter.js";
import VerificationRouter from "./src/routes/VerificationRouter.js";
import {
  ChangeForgotPassRouter,
  VerificationChangeForgotPassRouter,
} from "./src/routes/ChangeForgotPassRouter.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_USER = process.env.userDB;
const DB_PASSWORD = process.env.passwordDB;
const DB_NAME = process.env.nameDB;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.eo8lgvy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("DB ok"))
  .catch((err) => console.log("DB error ", err));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server run");
});

app.use("/api", AuthRouter);
app.use("/api", RegRouter);
app.use("/api", ForgotPassRouter);
app.use("/api", VerificationRouter);
app.use("/api", ChangeForgotPassRouter);
app.use("/api", VerificationChangeForgotPassRouter);

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server started on port: ${PORT}`);
});
