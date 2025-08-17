import Chat from "../models/Chat.js";
import Message from "../models/Message.js";
import { ContextService } from "./context.service.js";
import { OpenAIService } from "./ai/providers/openai.js";
import { UserService } from "./user.service.js";

export class ChatService {
  constructor() {
    this.contextService = new ContextService();
    this.openaiService = new OpenAIService();
    this.userService = new UserService();
  }

  async processMessage(
    userId,
    message,
    platform,
    type = "text",
    platformUserId = null
  ) {
    try {
      // 1. Get conversation context
      const context = await this.contextService.getContext(userId, platform);

      // 2. Generate AI response
      const aiResponse = await this.openaiService.generateResponse(
        message,
        context
      );

      // 3. Save user + AI messages
      await this.saveChatMessage(
        userId,
        platform,
        {
          role: "user",
          direction: "incoming",
          type,
          content: message,
        },
        platformUserId
      );

      await this.saveChatMessage(
        userId,
        platform,
        {
          role: "assistant",
          direction: "outgoing",
          type: "text", // TBI. AI usually responds with text
          content: aiResponse.content,
          ai_provider: aiResponse.provider,
          tokens_used: aiResponse.tokens_used,
        },
        platformUserId
      );

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

  async saveChatMessage(userId, platform, messageObj, platformUserId) {
    try {
      // 1. Find an OPEN chat for this user/platform
      let chat = await Chat.findOne({
        userId,
        platform,
        is_open: true, // ✅ only find open chats
      });

      // 2. If no open chat exists, create a new one
      if (!chat) {
        chat = new Chat({
          userId,
          platform,
          platform_user_id: platformUserId, // ✅ add platform-specific ID
          is_open: true, // ✅ explicitly set as open
        });
        await chat.save();
      }

      // 3. Save message in separate collection
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

      // 4. Update Chat stats
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

  // ✅ Method to close a chat
  async closeChat(userId, platform) {
    try {
      const chat = await Chat.findOne({
        userId,
        platform,
        is_open: true,
      });

      if (chat) {
        chat.is_open = false;
        chat.updated_at = new Date();
        await chat.save();
        return chat;
      }

      return null;
    } catch (error) {
      console.error("Error closing chat:", error);
      return null;
    }
  }

  // ✅ Method for clearing context (used by .clear command)
  async clearContext(userId) {
    try {
      // This method should exist - just adding it here if missing
      await this.contextService.clearContext(userId);
      return true;
    } catch (error) {
      console.error("Error clearing context:", error);
      return false;
    }
  }
}
