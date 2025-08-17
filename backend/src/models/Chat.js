import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  platform: {
    type: String,
    enum: ["whatsapp", "telegram", "instagram"],
    required: true,
  },
  platform_user_id: {
    type: String,
    // whatsapp: phone number, telegram: telegram_id, instagram: instagram_id
  },
  is_open: { type: Boolean, default: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  last_message: String,
  message_count: { type: Number, default: 0 },
  audio_count: { type: Number, default: 0 },
  image_count: { type: Number, default: 0 },
});

chatSchema.index({ userId: 1, platform: 1 }, { unique: true });

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);
export default Chat;
