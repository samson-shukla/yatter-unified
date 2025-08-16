import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  platform: { type: String, required: true },
  messages: [
    {
      role: { type: String, enum: ["user", "assistant"], required: true },
      content: String,
      timestamp: { type: Date, default: Date.now },
      ai_provider: String,
      tokens_used: Number,
    },
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model("Chat", chatSchema);
