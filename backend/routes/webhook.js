// webhook.js
const Stripe = require("stripe");
const { db } = require("../firebaseAdmin");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

module.exports = async function (req, res) {
  console.log("✅ Webhook received:", req.method, req.originalUrl);

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  const chunks = [];
  req.on("data", (chunk) => chunks.push(chunk));
  req.on("end", async () => {
    const buf = Buffer.concat(chunks);
    console.log("Buffer length:", buf.length);

    const sig = req.headers["stripe-signature"];
    console.log("Stripe signature header:", sig);

    let event;
    try {
      event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
      console.log("✅ Stripe webhook verified:", event.type);
    } catch (err) {
      console.error("❌ Stripe webhook verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Session object:", session);

      try {
        console.log("Checking Firebase DB reference...");
        const ref = db.ref("donations").push();
        console.log("Firebase ref created:", ref.key);

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

        console.log("✅ Donation saved to Firebase:", ref.key);
      } catch (err) {
        console.error("❌ Failed to save donation:", err);
      }
    } else {
      console.log("Unhandled event type:", event.type);
    }

    res.json({ received: true });
  });

  req.on("error", (err) => {
    console.error("❌ Request error:", err);
    res.status(500).end();
  });
};
