import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
      default: "",
    },
    passwordHash: {
      type: String,
      require: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    role: { type: Array, require: true, default: ["USER"] },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
