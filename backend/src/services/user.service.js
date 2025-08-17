import User from "../models/User.js";
import { countryCodes } from "../data/countryCodes.js";

export class UserService {
  async findOrCreateUser(phoneNumber, name = "") {
    try {
      // Normalize phone number (remove + if present)
      const normalizedPhone = phoneNumber.replace(/^\+/, "");

      let user = await User.findOne({ phone_number: normalizedPhone });

      if (!user) {
        // detect country code by matching longest prefix
        let detected = null;
        for (let len = 4; len >= 1; len--) {
          const prefix = normalizedPhone.substring(0, len);
          const found = countryCodes.find((c) => c.code === prefix);
          if (found) {
            detected = found;
            break;
          }
        }

        const now = new Date();

        user = new User({
          display_name: name,
          phone_number: normalizedPhone,
          country_code: detected ? detected.code : undefined,
          country_name: detected ? detected.name : undefined,
          reg_datetime: now,
          subscription_datetime: now,
          subscription_package: "trial",
          subscription_status: false,
          partial_streaming: false,
          preferred_language: "eng",
          location: detected ? detected.name : undefined,
        });

        await user.save();
        console.log(`New user created: ${normalizedPhone}`);
      }

      return user;
    } catch (error) {
      console.error("Error in findOrCreateUser:", error);
      throw error;
    }
  }

  async incrementMessageCount(userId, platform, direction, type) {
    try {
      const fieldPath = `message_stats.${platform}.${direction}.${type}`;
      await User.findByIdAndUpdate(userId, {
        $inc: { [fieldPath]: 1 },
        last_conv: Date.now().toString(),
      });
    } catch (error) {
      console.error("Error incrementing message count:", error);
    }
  }

  async updateUsage(userId, provider, tokensUsed) {
    try {
      const currentMonth = new Date()
        .toISOString()
        .substring(0, 7)
        .replace("-", ""); // YYYYMM format
      const usageKey = `m${currentMonth}`;

      await User.findByIdAndUpdate(userId, {
        $inc: { [`usage.${usageKey}`]: tokensUsed },
      });
    } catch (error) {
      console.error("Error updating usage:", error);
    }
  }
}
