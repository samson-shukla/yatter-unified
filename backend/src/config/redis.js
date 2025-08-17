import Redis from "ioredis";
import { config } from "./environment.js";

export const redis = new Redis(config.redis.url);

redis.on("connect", () => {
  console.log("Redis connected successfully");
});

redis.on("error", (error) => {
  console.error("Redis connection error:", error);
});
