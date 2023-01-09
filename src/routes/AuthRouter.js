import { Router } from "express";
import { auth } from "../controllers/auth.js";
import { authValidation } from "../validation/authValidation.js";

const AuthRouter = new Router();

AuthRouter.post("/auth", authValidation, auth);

export default AuthRouter;
