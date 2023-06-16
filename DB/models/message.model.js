import { Schema, Types, model } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    message: {
        type: String,
        required: true,
    },
    receiverId: {
        type: Types.ObjectId,
        required: true
    }

  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.models.Message || model("Message", userSchema)
export default messageModel