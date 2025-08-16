import express from "express";
import { WebhookController } from "../../controllers/webhook.controller.js";

const router = express.Router();
const webhookController = new WebhookController();

// Webhook verification
router.get("/", webhookController.verifyWebhook);

// Handle incoming messages
router.post("/", webhookController.handleMessage);

export default router;
