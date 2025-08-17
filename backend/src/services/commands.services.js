import { ChatService } from "./chat.service.js";
import { UserService } from "./user.service.js";

import { availableCommands } from "../data/whatsappPlatformData.js";

export class CommandService {
  constructor() {
    this.chatService = new ChatService();
    this.userService = new UserService();

    // Available commands
    this.availableCommands = availableCommands;
  }

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
          return await this.handleClearCommand(user._id);

        case "imagine":
          return await this.handleImagineCommand(user, parameters, platform);

        case "web_search":
          return await this.handleWebSearchCommand(user, parameters, platform);

        case "menu":
          return await this.handleMenuCommand(platform);

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
  handleClearCommand = async (userId) => {
    await this.chatService.clearContext(userId);
    return "✅ Chat context cleared successfully!";
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

  handleMenuCommand = async (platform) => {
    return (
      "📋 *Main Menu*\n\n" +
      "• .commands - View all commands\n" +
      "• .profile - Your profile info\n" +
      "• .help - Get assistance\n" +
      "• .clear - Clear chat context\n" +
      "• .language - Change language"
    );
  };

  handleProfileCommand = async (user, platform) => {
    return (
      `👤 *Your Profile*\n\n` +
      `Name: ${user.name}\n` +
      `Platform: ${platform}\n` +
      `Language: ${user.language || "English"}\n` +
      `Joined: ${user.created_at}`
    );
  };

  handleCommandsListCommand = async (platform) => {
    const commandsList = this.availableCommands
      .map((cmd) => `• .${cmd}`)
      .join("\n");

    return `🤖 *Available Commands*\n\n${commandsList}\n\nTip: You can also use / instead of .`;
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
      lang_eng: "English",
      lang_hin: "Hindi",
      lang_spa: "Spanish",
      lang_fra: "French",
      lang_heb: "Hebrew",
      lang_por: "Portuguese",
    };

    const language = langMap[command];
    if (language) {
      await this.userService.updateUserLanguage(user._id, language);
      return `✅ Language changed to ${language}`;
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
