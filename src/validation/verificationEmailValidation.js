import { body } from "express-validator";

export const verificationEmailValidation = [
  body("email", "bad format email").isEmail(),
];
