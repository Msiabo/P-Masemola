require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const webhookRoutes = require("./routes/webhook");
const donationRoutes = require("./routes/donationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Configure CORS before any routes
const allowedOrigins = [
  "https://p-masemola-gep5.vercel.app", // your frontend domain
  "http://localhost:5173",               // local dev
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps, curl, etc.)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.warn("Blocked by CORS:", origin);
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Handle preflight OPTIONS requests globally
app.options("*", cors());

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => res.send("Backend running ✅"));

// Routes
app.use("/api/webhook", webhookRoutes);
app.use("/api/donations", donationRoutes);

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
