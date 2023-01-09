import { validationResult } from "express-validator";
import User from "../models/User.js";

export const verify = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ message: false });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(402).json({ message: false });
    }
    if (user && user.status) {
      return res.status(402).json({ message: false });
    }

    return res.json({ message: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: false });
  }
};

export const changeForgotPassword = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ message: false });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(402).json({ message: false });
    }
    if (user && user.status) {
      return res.status(402).json({ message: false });
    }

    user.status = true;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    user.passwordHash = hash;
    await user.save();

    return res.json({ message: true });
  } catch (error) {
    return res.status(400).json({ message: false });
  }
};
