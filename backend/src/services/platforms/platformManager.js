class PlatformManager {
  constructor() {
    this.platforms = new Map([
      ["whatsapp", new WhatsAppService()],
      ["telegram", new TelegramService()],
      ["instagram", new InstagramService()],
      ["snapchat", new SnapchatService()],
      ["web", new WebService()],
    ]);
  }

  async sendMessage(platform, recipient, message, options = {}) {
    const platformService = this.platforms.get(platform);
    if (!platformService) {
      throw new Error(`Platform ${platform} not supported`);
    }

    return platformService.sendMessage(recipient, message, options);
  }

  // Wrapper functions for different message types
  async sendTextMessage(platform, recipient, text) {
    return this.sendMessage(platform, recipient, {
      type: "text",
      content: text,
    });
  }

  async sendImageMessage(platform, recipient, imageUrl, caption) {
    return this.sendMessage(platform, recipient, {
      type: "image",
      content: imageUrl,
      caption,
    });
  }

  async sendAudioMessage(platform, recipient, audioUrl) {
    return this.sendMessage(platform, recipient, {
      type: "audio",
      content: audioUrl,
    });
  }

  async sendInteractiveMessage(platform, recipient, interactiveMessage) {
    return this.sendMessage(platform, recipient, {
      type: "interactive",
      content: interactiveMessage,
    });
  }
}
