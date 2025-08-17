import { ChatService } from "./chat.service.js";
import { UserService } from "./user.service.js";
import {
  listReplies,
  messageReplies,
  availableCommands,
} from "../data/whatsappPlatformData.js";
import { interactiveMessageFormulator } from "../utils/whatsappHelpers.js";

export class CommandService {
  constructor() {
    this.chatService = new ChatService();
    this.userService = new UserService();

    // Available commands
    this.availableCommands = availableCommands;
  }

  // Helper function to get language-specific messages
  getLanguageMessages = (userLanguage) => {
    // userLanguage is stored as code (eng, spa, etc.)
    const langCode = userLanguage || "eng"; // Default to English
    return messageReplies[langCode] || messageReplies.eng;
  };

  // Helper to convert language code to full name for display
  getLanguageDisplayName = (langCode) => {
    const languageNames = {
      eng: "English",
      spa: "Spanish",
      fra: "French",
      por: "Portuguese",
      hin: "Hindi",
      heb: "Hebrew",
    };
    return languageNames[langCode] || "English";
  };

  // Check if message is a command
  isCommand = (message) => {
    return message.startsWith(".") || message.startsWith("/");
  };

  // Parse command from message
  parseCommand = (message) => {
    if (!this.isCommand(message)) return null;

    // Remove the prefix (. or /)
    const cleanMessage = message.slice(1);
    const parts = cleanMessage.split(" ");
    const command = parts[0].toLowerCase();
    const parameters = parts.slice(1).join(" ").trim();

    return {
      command,
      parameters,
      isValid: this.availableCommands.includes(command),
    };
  };

  // Handle command execution
  handleCommand = async (user, commandData, platform, messageId = null) => {
    const { command, parameters } = commandData;

    try {
      switch (command) {
        case "clear":
          return await this.handleClearCommand(user._id, user, platform);

        case "imagine":
          return await this.handleImagineCommand(user, parameters, platform);

        case "web_search":
          return await this.handleWebSearchCommand(user, parameters, platform);

        case "menu":
          return await this.handleMenuCommand(user, platform);

        case "profile":
          return await this.handleProfileCommand(user, platform);

        case "commands":
          return await this.handleCommandsListCommand(platform);

        case "help":
          return await this.handleHelpCommand(platform);

        case "language":
          return await this.handleLanguageCommand(user, parameters, platform);

        case "lang_eng":
        case "lang_hin":
        case "lang_spa":
        case "lang_fra":
        case "lang_heb":
        case "lang_por":
          return await this.handleLanguageChangeCommand(
            user,
            command,
            platform
          );

        // Add more command handlers as needed
        default:
          return await this.handleUnknownCommand(command, platform);
      }
    } catch (error) {
      console.error(`Error handling command ${command}:`, error);
      return this.getErrorMessage(platform);
    }
  };

  // Command handler methods
  handleClearCommand = async (userId, user, platform) => {
    try {
      // Clear context in Redis for this platform
      await this.chatService.contextService.clearContext(userId, platform);

      // Close current chat (set is_open: false)
      await this.chatService.closeChat(userId, platform);

      // Get language-specific message
      const messages = this.getLanguageMessages(user.preferred_language);
      return messages.chat.clearContext;
    } catch (error) {
      console.error("Error in handleClearCommand:", error);
      const messages = this.getLanguageMessages(user.preferred_language);
      return messages.onError.unknownError;
    }
  };

  handleImagineCommand = async (user, parameters, platform) => {
    if (!parameters) {
      return "❌ Please provide a description for the image. Example: .imagine a beautiful sunset";
    }
    // Add your image generation logic here
    return `🎨 Generating image: "${parameters}"...`;
  };

  handleWebSearchCommand = async (user, parameters, platform) => {
    if (!parameters) {
      return "❌ Please provide a search query. Example: .web_search latest news";
    }
    // Add your web search logic here
    return `🔍 Searching for: "${parameters}"...`;
  };

  handleMenuCommand = async (user, platform) => {
    return interactiveMessageFormulator(
      listReplies[user?.preferred_language].menu.bodyText,
      listReplies[user?.preferred_language].menu.actionButtonText,
      listReplies[user?.preferred_language].menu.actionSections,
      "",
      listReplies.general.footerBranding
    );
  };

  handleProfileCommand = async (user, platform) => {
    return (
      `👤 *Your Profile*\n\n` +
      `Name: ${user.name ? user.name : user?.display_name}\n` +
      `Platform: ${platform}\n` +
      `Language: ${user.language || "English"}\n` +
      `Location: ${user.location}\n` +
      `Partial Streaming: ${user.partial_streaming}\n` +
      "\nSubscription:\n" +
      `Status: ${user.subscription_status}\n` +
      `Package: ${user.subscription_package}\n` +
      "\nMessage Stats:\n" +
      `Incoming: ${user?.message_stats?.[platform]?.incoming}\n` +
      `Outgoing: ${user?.message_stats?.[platform]?.outgoing}`
    );
  };

  handleCommandsListCommand = async (platform) => {
    const commandsList = this.availableCommands
      .map((cmd) => `/${cmd}`)
      .join("\n");

    return `🤖 *Available Commands*\n\n${commandsList}\n\nTip: You can also use . instead of /`;
  };

  handleLanguageCommand = async (user, parameters, platform) => {
    if (!parameters) {
      return (
        "🌐 *Language Options*\n\n" +
        "• .lang_eng - English\n" +
        "• .lang_hin - Hindi\n" +
        "• .lang_spa - Spanish\n" +
        "• .lang_fra - French\n" +
        "• .lang_heb - Hebrew\n" +
        "• .lang_por - Portuguese"
      );
    }
    return "❌ Invalid language parameter. Use .language to see available options.";
  };

  handleLanguageChangeCommand = async (user, command, platform) => {
    const langMap = {
      lang_eng: "eng",
      lang_hin: "hin",
      lang_spa: "spa",
      lang_fra: "fra",
      lang_heb: "heb",
      lang_por: "por",
    };

    const language = langMap[command];
    if (language) {
      await this.userService.updateUserField(user._id, {
        preferred_language: language,
      });
      return messageReplies.general.languageChangedTo?.[language];
    }
    return "❌ Invalid language selection.";
  };

  handleHelpCommand = async (platform) => {
    return (
      "❓ *Help & Support*\n\n" +
      "Commands start with . or /\n" +
      "Examples:\n" +
      "• .help - This help message\n" +
      "• .menu - Main menu\n" +
      "• .clear - Clear chat history\n\n" +
      "For more assistance, contact support."
    );
  };

  handleUnknownCommand = async (command, platform) => {
    return `❌ Unknown command: "${command}"\n\nType .commands to see available commands.`;
  };

  getErrorMessage = (platform) => {
    return "❌ An error occurred while processing your command. Please try again.";
  };
}
