import User from "../models/User.js";

export class UserService {
  async findOrCreateUser(phoneNumber, name = "") {
    try {
      let user = await User.findOne({ phone_number: phoneNumber });

      // TBI. Check it.
      if (!user) {
        user = new User({
          display_name: name,
          phone_number: phoneNumber,
          country_code: phoneNumber.startsWith("+91") ? "+91" : "+1",
          reg_datetime: new Date(),
        });
        await user.save();
        console.log(`New user created: ${phoneNumber}`);
      }

      return user;
    } catch (error) {
      console.error("Error in findOrCreateUser:", error);
      throw error;
    }
  }

  async incrementMessageCount(userId) {
    try {
      await User.findByIdAndUpdate(userId, {
        $inc: { message_count: 1 },
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
