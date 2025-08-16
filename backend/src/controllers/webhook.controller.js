import { WhatsAppService } from "../services/platforms/whatsapp.js";
import { ChatService } from "../services/chat.service.js";
import { UserService } from "../services/user.service.js";
import { config } from "../config/environment.js";

export class WebhookController {
  constructor() {
    this.whatsappService = new WhatsAppService();
    this.chatService = new ChatService();
    this.userService = new UserService();
  }

  // Webhook verification (GET request)
  verifyWebhook = (req, res) => {
    try {
      const mode = req.query["hub.mode"];
      const token = req.query["hub.verify_token"];
      const challenge = req.query["hub.challenge"];

      if (mode === "subscribe" && token === config.whatsapp.verifyToken) {
        console.log("Webhook verified successfully");
        res.status(200).send(challenge);
      } else {
        console.log("Webhook verification failed");
        res.status(403).send("Forbidden");
      }
    } catch (error) {
      console.error("Webhook verification error:", error);
      res.status(500).send("Internal Server Error");
    }
  };

  // Handle incoming messages (POST request)
  handleMessage = async (req, res) => {
    try {
      res.status(200).send("OK"); // ✅ respond first

      // WhatsApp webhook payload can contain multiple entries
      const parsedMessage = this.whatsappService.parseWebhookMessage(req.body);

      if (!parsedMessage || !parsedMessage.message) {
        // Likely a delivery/status event, ignore
        return;
      }

      // console.log("parsedMessage", parsedMessage);

      const { from, message, name, type } = parsedMessage;

      if (type !== "text" || !message.trim()) {
        console.log(`Ignoring message type: ${type}`);
        return;
      }

      const user = await this.userService.findOrCreateUser(from, name);

      if (user.is_blocked) {
        console.log(`User ${from} is blocked`);
        return;
      }

      const aiResponse = await this.chatService.processMessage(
        user._id,
        message,
        "whatsapp"
      );

      await this.whatsappService.sendTextMessage(from, aiResponse);
    } catch (error) {
      console.error("Error handling webhook message:", error);
    }
  };
}
