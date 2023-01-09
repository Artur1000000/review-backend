import { validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET = process.env.secret;

export const auth = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "failed to authorization" });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "failed to authorization" });
    }

    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPassword) {
      return res.status(404).json({ message: "failed to authorization" });
    }

    const token = jwt.sign({ _id: user._id }, SECRET, {
      expiresIn: "30d",
    });

    const { passwordHash, _id, ...dataUser } = user._doc;

    return res.status(200).json({ token, ...dataUser, id: _id });
  } catch (error) {
    res.status(500).json({ message: "failed to authorization" });
  }
};
