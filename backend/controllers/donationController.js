const Stripe = require("stripe");
const { db } = require("../firebaseAdmin");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Create Stripe Payment Intent
const createCheckoutSession = async (req, res) => {
  console.log("Creating checkout session with body:", req.body);
  try {
    const { amount, name, email, userId } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "zar",
            product_data: { name: `Donation from ${name || "Anonymous"}` },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email,
      success_url: `${process.env.FRONTEND_URL}/donate-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/donate-cancel`,
      metadata: { userId: userId || "guest" },
    });

    console.log("Checkout session created:", session.id);
    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Failed to create checkout session:", error);
    res.status(500).json({ error: error.message });
  }
};

const saveDonation = async (req, res) => {
  console.log("Saving donation with body:", req.body);

  try {
    const {
      userId = null,
      name = "Anonymous",
      email = "N/A",
      amount = 0,
      currency = "N/A",
      paymentId = null,
    } = req.body;

    if (!amount || !currency) {
      console.warn("Amount or currency missing in request body!");
    }

    const ref = db.ref("donations").push();

    await ref.set({
      userId,
      name,
      email,
      amount,
      currency,
      paymentId,
      createdAt: Date.now(),
    });

    console.log("Donation saved manually:", ref.key);
    res.status(200).json({ success: true, donationId: ref.key });
  } catch (error) {
    console.error("Failed to save donation manually:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getCheckoutSession = async (req, res) => {
  console.log("Fetching checkout session with ID:", req.query.sessionId);
  try {
    const { sessionId } = req.query;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("Session retrieved:", session.id);
    res.json(session);
  } catch (error) {
    console.error("Failed to retrieve session:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createCheckoutSession,saveDonation,getCheckoutSession };

