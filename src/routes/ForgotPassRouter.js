import { Router } from "express";
import { forgotPass } from "../controllers/forgotPass.js";
import { forgotPassValidation } from "../validation/forgotPassValidation.js";

const ForgotPassRouter = new Router();

ForgotPassRouter.post("/forgot_pass", forgotPassValidation, forgotPass);

export default ForgotPassRouter;
