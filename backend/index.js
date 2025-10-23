require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const donationRoutes = require("../routes/donationRoutes");
const webhookRoutes = require("../routes/webhook");
const serverless = require("serverless-http");

const app = express();

const allowedOrigins = [
  "https://p-masemola-gep5.vercel.app",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn("Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Preflight
app.options("*", cors());

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => res.send("Backend running ✅"));

// Routes
app.use("/donations", donationRoutes);
app.use("/webhook", webhookRoutes);

// Export for Vercel serverless
module.exports = app;
module.exports.handler = serverless(app);
