import OpenAI from "openai";
import { config } from "../../../config/environment.js";

export class OpenAIService {
  constructor() {
    this.client = new OpenAI({
      apiKey: config.openai.apiKey,
    });
  }

  async generateResponse(message, context = []) {
    try {
      // Format context for ChatGPT
      const messages = [
        {
          role: "system",
          content: config.openai.systemPrompt,
        },
      ];

      // Add context messages
      context.reverse().forEach((ctx) => {
        messages.push({ role: "user", content: ctx.message });
        messages.push({ role: "assistant", content: ctx.reply });
      });

      // Add current message
      messages.push({ role: "user", content: message });

      const response = await this.client.chat.completions.create({
        model: config.openai.defaultModel.name,
        messages: messages,
        max_tokens: config.openai.defaultModel.maxTokens,
        temperature: config.openai.defaultModel.temperature,
      });

      return {
        content: response.choices[0].message.content,
        tokens_used: response.usage.total_tokens,
        provider: "openai",
      };
    } catch (error) {
      console.error("OpenAI API error:", error);
      throw new Error("Failed to generate AI response");
    }
  }
}
