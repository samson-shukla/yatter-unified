import { redis } from "../config/redis.js";

export class ContextService {
  constructor() {
    this.CONTEXT_LIMIT = 5; // 5 messages + replies
  }

  async getContext(userId, platform) {
    try {
      const key = `context:${userId}:${platform}`;
      const context = await redis.lrange(key, 0, this.CONTEXT_LIMIT - 1);
      return context.map((item) => JSON.parse(item));
    } catch (error) {
      console.error("Error getting context:", error);
      return [];
    }
  }

  async addToContext(userId, platform, message, reply) {
    try {
      const key = `context:${userId}:${platform}`;
      const contextItem = {
        message,
        reply,
        timestamp: Date.now(),
      };

      await redis.lpush(key, JSON.stringify(contextItem));
      await redis.ltrim(key, 0, this.CONTEXT_LIMIT - 1);
      await redis.expire(key, 86400); // 24 hours
    } catch (error) {
      console.error("Error adding to context:", error);
    }
  }
}
