import dotenv from "dotenv";
dotenv.config();

export const config = {
  mongodb: {
    uri:
      `${process.env.MONGODB_URI}/yatter_ai_db${process.env.MONGODB_CLUSTER_PARAM}` ||
      "mongodb://localhost:27017/yatter_ai_db",
  },
  redis: {
    url: process.env.REDIS_URL || "redis://localhost:6379",
    contextExpirationTime: 86400, // 24 hours
  },
  whatsapp: {
    baseUrl: "https://graph.facebook.com/v23.0",
    token: process.env.WHATSAPP_TOKEN,
    verifyToken: process.env.WHATSAPP_VERIFY_TOKEN,
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID,
  },
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
    systemPrompt:
      "You are Yatter AI, a helpful assistant. Provide concise and helpful responses.",

    defaultModel: { name: "gpt-3.5-turbo", maxTokens: 2000, temperature: 0.7 },
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
