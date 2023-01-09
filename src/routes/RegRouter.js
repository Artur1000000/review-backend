import { Router } from "express";
import { reg } from "../controllers/reg.js";
import { regValidation } from "../validation/regValidation.js";

const RegRouter = new Router();

RegRouter.post("/reg", regValidation, reg);

export default RegRouter;
