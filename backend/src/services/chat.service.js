import Chat from "../models/Chat.js";
import Message from "../models/Message.js"; // ✅ new
import { ContextService } from "./context.service.js";
import { OpenAIService } from "./ai/providers/openai.js";
import { UserService } from "./user.service.js";

export class ChatService {
  constructor() {
    this.contextService = new ContextService();
    this.openaiService = new OpenAIService();
    this.userService = new UserService();
  }

  async processMessage(userId, message, platform, type = "text") {
    try {
      // 1. Get conversation context
      const context = await this.contextService.getContext(userId, platform);

      // 2. Generate AI response
      const aiResponse = await this.openaiService.generateResponse(
        message,
        context
      );

      // 3. Save user + AI messages
      await this.saveChatMessage(userId, platform, {
        role: "user",
        direction: "incoming",
        type,
        content: message,
      });

      await this.saveChatMessage(userId, platform, {
        role: "assistant",
        direction: "outgoing",
        type: "text", // AI usually responds with text
        content: aiResponse.content,
        ai_provider: aiResponse.provider,
        tokens_used: aiResponse.tokens_used,
      });

      // 4. Update context
      await this.contextService.addToContext(
        userId,
        platform,
        message,
        aiResponse.content
      );

      // 5. Update user statistics
      await this.userService.incrementMessageCount(
        userId,
        platform,
        "incoming",
        type
      );
      await this.userService.incrementMessageCount(
        userId,
        platform,
        "outgoing",
        "text"
      );
      await this.userService.updateUsage(
        userId,
        aiResponse.provider,
        aiResponse.tokens_used
      );

      return aiResponse.content;
    } catch (error) {
      console.error("Error processing message:", error);
      return "Sorry, I encountered an error while processing your message. Please try again.";
    }
  }

  async saveChatMessage(userId, platform, messageObj) {
    try {
      // 1. Find or create Chat
      let chat = await Chat.findOne({ userId, platform });
      if (!chat) {
        chat = new Chat({ userId, platform });
        await chat.save();
      }

      // 2. Save message in separate collection
      const message = new Message({
        chatId: chat._id,
        userId,
        role: messageObj.role,
        direction: messageObj.direction,
        type: messageObj.type,
        content: messageObj.content,
        ai_provider: messageObj.ai_provider || null,
        tokens_used: messageObj.tokens_used || null,
        metadata: messageObj.metadata || {},
        timestamp: new Date(),
      });
      await message.save();

      // 3. Update Chat stats
      chat.last_message = messageObj.content;
      chat.message_count += 1;
      if (messageObj.type === "audio") chat.audio_count += 1;
      if (messageObj.type === "image") chat.image_count += 1;
      chat.updated_at = new Date();
      await chat.save();

      return message;
    } catch (error) {
      console.error("Error saving chat message:", error);
    }
  }
}
