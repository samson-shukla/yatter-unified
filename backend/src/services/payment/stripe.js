export class StripeService {
  constructor() {
    this.stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  }

  async createSubscription(customerId, priceId) {
    return this.stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
    });
  }

  async handleWebhook(payload, signature) {
    const event = this.stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case "invoice.payment_succeeded":
        await this.handlePaymentSuccess(event.data.object);
        break;
      case "invoice.payment_failed":
        await this.handlePaymentFailure(event.data.object);
        break;
    }
  }
}
