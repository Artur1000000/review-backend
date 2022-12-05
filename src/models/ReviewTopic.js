import mongoose from "mongoose";

const ReviewTopicSchema = new mongoose.Schema(
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
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("ReviewTopic", ReviewTopicSchema);
