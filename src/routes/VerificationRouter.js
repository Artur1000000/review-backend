import { Router } from "express";
import { verificationEmail } from "../controllers/verificationEmail.js";
import { verificationEmailValidation } from "../validation/verificationEmailValidation.js";

const VerificationRouter = new Router();

VerificationRouter.post("/verification/:id", verificationEmailValidation, verificationEmail);

export default VerificationRouter;
