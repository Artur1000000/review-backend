import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { registrationMessage } from "../mail/mail.js";
import { sendMail } from "../mail/sendMail.js";

export const reg = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(404).json({ message: "failed to register" });
    }

    const { userName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new User({
      userName: userName,
      email: email,
      passwordHash: hash,
    });

    await doc.save();

    await sendMail(
      req.body.email,
      registrationMessage,
      "Verify your email",
      "Hello"
    );

    return res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: "failed to register" });
  }
};
