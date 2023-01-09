import { validationResult } from "express-validator";
import User from "../models/User.js";

export const verificationEmail = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()[0].msg,
      });
    }
    const user = await User.findOne({ email: req.body.email }).exec();
    if (user.email && !user.status) {
      user.status = true;
      await user.save();
      return res.json({ message: true });
    } else {
      return res.status(401).json({ message: "failed to verification" });
    }
  } catch (error) {
    res.status(404).json({ message: "failed to verification" });
  }
};
