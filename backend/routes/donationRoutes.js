const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");
const verifyUser = require("../middlewares/authMiddleware");

// Allow both authenticated and guest donors
router.post("/create-checkout-session", donationController.createCheckoutSession);
router.get("/checkout-session", donationController.getCheckoutSession);
router.post("/save-donation", donationController.saveDonation);
// Test route to manually save donation
router.post("/test-save", async (req, res) => {
  try {
    const { name, email, amount, currency, userId } = req.body;
    const result = await donationController.saveDonation({
      body: { name, email, amount, currency, userId }
    }, {
      status: (code) => ({
        json: (data) => res.status(code).json(data)
      })
    });
  } catch (err) {
    console.error("Manual save failed:", err);
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
