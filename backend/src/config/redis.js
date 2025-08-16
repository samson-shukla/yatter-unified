import Redis from "ioredis";
import { config } from "./environment.js";

export const redis = new Redis(config.redis.url);

redis.on("connect", () => {
  console.log("Redis connected successfully");
});

redis.on("error", (error) => {
  console.error("Redis connection error:", error);
});

// Step 4: User Model (models/User.js)
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  display_name: String,
  phone_number: { type: String, unique: true, sparse: true },
  country_code: String,
  reg_datetime: { type: Date, default: Date.now },
  subscription_status: { type: Boolean, default: false },
  message_count: { type: Number, default: 0 },
  last_conv: String,
  is_blocked: { type: Boolean, default: false },
  usage: {
    type: Map,
    of: Number,
    default: new Map(),
  },
});

export default mongoose.model("User", userSchema);
