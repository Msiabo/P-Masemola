const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const donationRoutes = require("./routes/donationRoutes");
const webhookRoutes = require("./routes/webhook");

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
  origin: ["http://localhost:5173", "https://p-masemola-gep5.vercel.app"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

// Body parser for all routes **except Stripe webhook**
app.use((req, res, next) => {
  if (req.originalUrl === "/api/webhook/stripe-webhook") {
    next(); // skip parsing
  } else {
    express.json()(req, res, next);
  }
});

app.use(express.urlencoded({ extended: true }));

// Donation routes
app.use("/api/donations", donationRoutes);

// Stripe webhook route (raw body required)
app.post(
  "/api/webhook/stripe-webhook",
  express.raw({ type: "application/json" }),
  webhookRoutes
);

// Test route
app.get("/", (req, res) => res.send("Backend running ✅"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
