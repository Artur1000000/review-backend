import { body } from "express-validator";

export const forgotPassValidation = [
  body("email", "bad format email").isEmail(),
];
