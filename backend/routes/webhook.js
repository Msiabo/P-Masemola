// webhook.js
import Stripe from "stripe";
import { buffer } from "micro";
import { db } from "../firebaseAdmin"; // adjust path

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const buf = await buffer(req);
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log("Webhook event constructed successfully");
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    try {
      const ref = db.ref("donations").push();
      const { metadata = {}, customer_details = {}, customer_email, amount_total, currency, payment_intent } = session;

      await ref.set({
        userId: metadata.userId || "guest",
        name: customer_details.name || "Anonymous",
        email: customer_email,
        amount: amount_total / 100,
        currency,
        paymentId: payment_intent,
        createdAt: Date.now(),
      });

      console.log("Donation saved:", ref.key);
    } catch (err) {
      console.error("Failed to save donation:", err);
    }
  } else {
    console.log("Unhandled event type:", event.type);
  }

  res.json({ received: true });
}
