// webhook.js
const Stripe = require("stripe");
const { db } = require("../firebaseAdmin");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  console.log("✅ Webhook received:", req.method, req.originalUrl);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    // req.body is already a Buffer because we used express.raw() in server
    const buf = req.body;
    console.log("Buffer length:", buf.length);

    const sig = req.headers["stripe-signature"];
    if (!sig) {
      console.error("❌ Missing Stripe signature header");
      return res.status(400).send("Missing Stripe signature");
    }

    const event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log("✅ Stripe webhook verified:", event.type);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const { metadata = {}, customer_details = {}, customer_email, amount_total, currency, payment_intent } = session;

      const ref = db.ref("donations").push();
      await ref.set({
        userId: metadata.userId || "guest",
        name: customer_details.name || "Anonymous",
        email: customer_email,
        amount: amount_total / 100,
        currency,
        paymentId: payment_intent,
        createdAt: Date.now(),
      });

      console.log("✅ Donation saved to Firebase:", ref.key);
    } else {
      console.log("⚠️ Unhandled event type:", event.type);
    }

    res.status(200).json({ received: true });
  } catch (err) {
    console.error("❌ Webhook error:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};
