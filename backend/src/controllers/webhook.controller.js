import { WhatsAppService } from "../services/platforms/whatsapp.js";
import { ChatService } from "../services/chat.service.js";
import { UserService } from "../services/user.service.js";
import { CommandService } from "../services/commands.services.js";
import { config } from "../config/environment.js";
import { loadingEmojiCodes } from "../data/whatsappPlatformData.js";

export class WebhookController {
  constructor() {
    this.whatsappService = new WhatsAppService();
    this.chatService = new ChatService();
    this.userService = new UserService();
    this.commandService = new CommandService();
  }

  // Platform-specific message sending
  sendResponse = async (platform, recipient, message, messageId = null) => {
    try {
      switch (platform) {
        case "whatsapp":
          await this.whatsappService.sendTextMessage(recipient, message);
          break;
        case "telegram":
          // Add telegram sending logic
          break;
        case "web":
          // Add web platform sending logic
          break;
        default:
          console.error(`Unknown platform: ${platform}`);
      }
    } catch (error) {
      console.error(`Error sending response to ${platform}:`, error);
    }
  };

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

  // Handle incoming messages (POST request) - Enhanced with command support
  handleMessage = async (req, res) => {
    try {
      res.status(200).send("OK"); // ✅ respond first

      // WhatsApp webhook payload can contain multiple entries
      const parsedMessage = this.whatsappService.parseWebhookMessage(req.body);

      if (!parsedMessage || !parsedMessage.message) {
        // Likely a delivery/status event, ignore
        return;
      }

      const { from, message, name, type, messageId } = parsedMessage;

      if (type !== "text" || !message.trim()) {
        console.log(`Ignoring message type: ${type}`);
        return;
      }

      const user = await this.userService.findOrCreateUser(from, name);

      if (user.is_blocked) {
        console.log(`User ${from} is blocked`);
        return;
      }

      // Check if message is a command
      if (this.commandService.isCommand(message)) {
        const commandData = this.commandService.parseCommand(message);

        if (!commandData.isValid) {
          await this.sendResponse(
            "whatsapp",
            from,
            `❌ Unknown command: "${commandData.command}"\n\nType .commands to see available commands.`
          );
          return;
        }

        // Send reaction to show processing
        await this.whatsappService.sendReactionMessage(
          from,
          messageId,
          "⚡" // Different emoji for commands
        );

        // Handle the command using CommandService
        const commandResponse = await this.commandService.handleCommand(
          user,
          commandData,
          "whatsapp",
          messageId
        );
        await this.sendResponse("whatsapp", from, commandResponse);
        return;
      }

      // Regular message processing (non-command)
      // Sending reaction message to show the processing
      await this.whatsappService.sendReactionMessage(
        from,
        messageId,
        Object.values(loadingEmojiCodes)[Math.floor(Math.random() * 5)]
      );

      const aiResponse = await this.chatService.processMessage(
        user._id,
        message,
        "whatsapp",
        "text", // TBI. message type
        from // message received from (for WhatsApp, phone number, for Telegram, TG user ID)
      );

      // Sending response as text message
      await this.sendResponse("whatsapp", from, aiResponse);
    } catch (error) {
      console.error("Error handling webhook message:", error);
    }
  };
}
