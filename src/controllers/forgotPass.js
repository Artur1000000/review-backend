import { validationResult } from "express-validator";
import { forgotMessage } from "../mail/mail.js";
import { sendMail } from "../mail/sendMail.js";
import User from "../models/User.js";

export const forgotPass = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "failed" });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "failed" });
    }
    user.status=false;
    await user.save();
    await sendMail(
      req.body.email,
      forgotMessage,
      "Change Password",
      "Change Password"
    );
    return res.status(200).json({ message: true });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};
