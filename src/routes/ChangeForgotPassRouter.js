import { Router } from "express";
import {
  changeForgotPassword,
  verify,
} from "../controllers/changeForgotPass.js";
import { verificationEmailValidation } from "../validation/verificationEmailValidation.js";

const ChangeForgotPassRouter = new Router();

ChangeForgotPassRouter.post(
  "/changeForgotPassword/:id",
  verificationEmailValidation,
  changeForgotPassword
);

const VerificationChangeForgotPassRouter = new Router();

VerificationChangeForgotPassRouter.post(
  "/verify/:id",
  verificationEmailValidation,
  verify
);

export { ChangeForgotPassRouter, VerificationChangeForgotPassRouter };
