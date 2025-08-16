import axios from "axios";
import { config } from "../../config/environment.js";

export class WhatsAppService {
  constructor() {
    this.baseURL = `${config.whatsapp.baseUrl}/${config.whatsapp.phoneNumberId}`;
    this.token = config.whatsapp.token;
  }

  async sendTextMessage(recipientNumber, message) {
    try {
      const url = `${this.baseURL}/messages`;
      const data = {
        messaging_product: "whatsapp",
        to: recipientNumber,
        type: "text",
        text: {
          body: message,
        },
      };

      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error(
        "WhatsApp send message error:",
        error.response?.data || error.message
      );
      throw new Error("Failed to send WhatsApp message");
    }
  }

  parseWebhookMessage(body) {
    try {
      const entry = body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;

      if (value?.messages && value.messages.length > 0) {
        const message = value.messages[0];
        const contact = value.contacts?.[0];

        return {
          messageId: message.id,
          from: message.from,
          message: message.text?.body || "",
          timestamp: message.timestamp,
          name: contact?.profile?.name || "Unknown",
          type: message.type,
        };
      }

      return null;
    } catch (error) {
      console.error("Error parsing WhatsApp webhook:", error);
      return null;
    }
  }
}
