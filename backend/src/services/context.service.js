import { redis } from "../config/redis.js";
import Message from "../models/Message.js";
import { PLATFORM_CONFIG } from "../config/platforms.js";
import { config } from "../config/environment.js";

export class ContextService {
  constructor() {}

  async getContext(userId, platform) {
    try {
      const limit = PLATFORM_CONFIG[platform]?.CONTEXT_LIMIT || 3; // fallback to 3
      const key = `context:${userId}:${platform}`;

      // 1. Try from Redis
      let context = await redis.lrange(key, 0, limit - 1);
      if (context.length > 0) {
        return context.map((item) => JSON.parse(item));
      }

      // 2. Fallback → MongoDB
      const messages = await Message.find({ userId, platform })
        .sort({ timestamp: -1 })
        .limit(limit)
        .select("role content timestamp")
        .lean();

      const formatted = messages
        .reverse() // oldest → newest
        .map((m) => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp,
        }));

      // 3. Cache back to Redis
      if (formatted.length > 0) {
        const pipeline = redis.pipeline();
        formatted.forEach((msg) => pipeline.rpush(key, JSON.stringify(msg)));
        pipeline.expire(key, config.redis.contextExpirationTime);
        await pipeline.exec();
      }

      return formatted;
    } catch (error) {
      console.error("Error getting context:", error);
      return [];
    }
  }

  async addToContext(userId, platform, message, reply) {
    try {
      const limit = PLATFORM_CONFIG[platform]?.CONTEXT_LIMIT || 5;
      const key = `context:${userId}:${platform}`;

      const contextItem = {
        userMessage: message,
        aiReply: reply,
        timestamp: Date.now(),
      };

      await redis.lpush(key, JSON.stringify(contextItem));
      await redis.ltrim(key, 0, limit - 1);
      await redis.expire(key, config.redis.contextExpirationTime);
    } catch (error) {
      console.error("Error adding to context:", error);
    }
  }
}
