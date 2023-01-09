import { body } from "express-validator";

export const regValidation = [
  body("email", "bad format email").isEmail(),
  body("password", "min 4 symbol").isLength({ min: 4 }),
];
