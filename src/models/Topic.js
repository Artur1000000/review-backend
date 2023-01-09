import mongoose from "mongoose";

const TopicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    rating: [
      {
        value: Number,
        author: String,
      },
    ],
    category: {
      type: String,
      require: true,
    },
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Topics", TopicSchema);
