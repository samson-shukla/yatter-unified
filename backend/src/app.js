import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectDB } from "./config/database.js";
import whatsappWebhook from "./routes/webhooks/whatsapp.js";

class App {
  constructor() {
    this.app = express();
    this.initializeMiddleware();
    this.initializeRoutes();
    // this.initializeErrorHandling();
  }

  initializeMiddleware() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  initializeRoutes() {
    // Health check
    this.app.get("/health", (req, res) => {
      res
        .status(200)
        .json({ status: "OK", timestamp: new Date().toISOString() });
    });

    // WhatsApp webhook
    this.app.use("/webhook/whatsapp", whatsappWebhook);
  }

  // initializeErrorHandling() {
  //   this.app.use((err, req, res, next) => {
  //     console.error("Unhandled error:", err);
  //     res.status(500).json({ error: "Internal Server Error" });
  //   });

  //   this.app.use("*", (req, res) => {
  //     res.status(404).json({ error: "Route not found" });
  //   });
  // }

  async start() {
    try {
      await connectDB();

      const PORT = process.env.PORT || 3000;
      this.app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        console.log(
          `WhatsApp webhook URL: http://localhost:${PORT}/webhook/whatsapp`
        );
      });
    } catch (error) {
      console.error("Failed to start server:", error);
      process.exit(1);
    }
  }
}

export default new App();
