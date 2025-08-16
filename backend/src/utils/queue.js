import Bull from "bull";
import Redis from "ioredis";

export class QueueManager {
  constructor() {
    this.redis = new Redis(process.env.REDIS_URL);

    // Different queues for different priorities
    this.aiQueue = new Bull("ai processing", { redis: this.redis });
    this.mediaQueue = new Bull("media processing", { redis: this.redis });
    this.reminderQueue = new Bull("reminders", { redis: this.redis });

    this.setupProcessors();
  }

  setupProcessors() {
    // AI processing with concurrency
    this.aiQueue.process("text-generation", 10, async (job) => {
      const { userId, message, platform, context } = job.data;
      // Process AI request
    });

    // Media processing
    this.mediaQueue.process("image-analysis", 5, async (job) => {
      // Process image
    });

    this.mediaQueue.process("pdf-analysis", 3, async (job) => {
      // Process PDF
    });
  }

  async addAIJob(userId, message, platform, priority = "normal") {
    return this.aiQueue.add(
      "text-generation",
      {
        userId,
        message,
        platform,
      },
      {
        priority: priority === "premium" ? 10 : 1,
        attempts: 3,
        backoff: "exponential",
      }
    );
  }
}
