import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartHandshake, HandCoins, Gift } from "lucide-react";
import axios from "axios";

const Donate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://p-masemola.vercel.app/api/donations/create-checkout-session", {
      amount: Number(formData.amount),
      name: formData.name,
      email: formData.email,
    });

    // Redirect user to Stripe Checkout
    window.location.href = response.data.url;
  } catch (err) {
    console.error("Error creating checkout session:", err);
    alert("Failed to start payment. Please try again.");
  }
};

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* HEADER */}
      <section className="relative bg-gradient-to-r from-[#1AA1B3] via-[#1796a7] to-[#127986] text-white text-center py-28 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empower Change. Inspire Hope.
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-100 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your donation directly supports our mission to uplift youth through
          education, leadership, and opportunity. No login or account needed —
          simply make your pledge below.
        </motion.p>

        <motion.a
          href="#donate-form"
          className="inline-block mt-8 bg-[#F9A813] text-[#980A26] font-semibold px-8 py-4 rounded-full shadow-md hover:bg-[#e0a111] hover:scale-105 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Donate Now
        </motion.a>
      </section>

      {/* DONATION FORM */}
      <section
        id="donate-form"
        className="max-w-2xl mx-auto bg-[#E8F8FA] rounded-3xl shadow-lg p-10 my-16 text-center"
      >
        <motion.h2
          className="text-3xl font-bold text-[#1AA1B3] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Make an Online Donation
        </motion.h2>
        <p className="text-gray-600 mb-8">
          Complete the form below to donate securely through Stripe — no account
          needed.
        </p>

        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Donation Amount (ZAR)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="e.g. 250"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#1AA1B3]"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#F9A813] text-[#980A26] font-semibold py-3 rounded-lg shadow-md transition-all duration-300 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#e0a111] hover:scale-[1.02]"
            }`}
          >
            {loading ? "Processing..." : "Donate"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Donate;
