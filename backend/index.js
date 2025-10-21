require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const webhookRoutes = require("./routes/webhook");
const donationRoutes = require("./routes/donationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/webhook", webhookRoutes);

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => res.send("Backend running"));

// Donation routes
app.use("/api/donations", donationRoutes);



app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
