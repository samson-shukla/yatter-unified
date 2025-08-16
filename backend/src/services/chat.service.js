import Chat from "../models/Chat.js";
import { ContextService } from "./context.service.js";
import { OpenAIService } from "./ai/providers/openai.js";
import { UserService } from "./user.service.js";

export class ChatService {
  constructor() {
    this.contextService = new ContextService();
    this.openaiService = new OpenAIService();
    this.userService = new UserService();
  }

  async processMessage(userId, message, platform) {
    try {
      // Get conversation context
      const context = await this.contextService.getContext(userId, platform);

      // Generate AI response
      const aiResponse = await this.openaiService.generateResponse(
        message,
        context
      );

      // Save to chat history
      await this.saveChatMessage(userId, platform, message, aiResponse);

      // Update context
      await this.contextService.addToContext(
        userId,
        platform,
        message,
        aiResponse.content
      );

      // Update user statistics
      await this.userService.incrementMessageCount(userId);
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

  async saveChatMessage(userId, platform, userMessage, aiResponse) {
    try {
      let chat = await Chat.findOne({ userId, platform }).sort({
        created_at: -1,
      });

      if (!chat) {
        chat = new Chat({
          userId,
          platform,
          messages: [],
        });
      }

      // Add user message
      chat.messages.push({
        role: "user",
        content: userMessage,
        timestamp: new Date(),
      });

      // Add AI response
      chat.messages.push({
        role: "assistant",
        content: aiResponse.content,
        timestamp: new Date(),
        ai_provider: aiResponse.provider,
        tokens_used: aiResponse.tokens_used,
      });

      chat.updated_at = new Date();
      await chat.save();
    } catch (error) {
      console.error("Error saving chat message:", error);
    }
  }
}
