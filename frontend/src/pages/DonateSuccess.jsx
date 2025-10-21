import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const DonateSuccess = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        if (!sessionId) return;
        const res = await axios.get(
          `http://localhost:5000/api/donations/checkout-session?sessionId=${sessionId}`
        );
        setSession(res.data);
      } catch (error) {
        console.error("Failed to fetch session info:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [sessionId]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#E0F7FA] to-[#B2EBF2] px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
        >
          <CheckCircle2 className="mx-auto text-[#1AA1B3] w-20 h-20 mb-4" />
        </motion.div>

        <h1 className="text-3xl font-extrabold text-[#127986] mb-2">
          Thank You for Your Donation! 💛
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Your generous support helps us uplift youth and build brighter futures.
        </p>

        {loading ? (
          <p className="text-gray-500 animate-pulse">Loading donation details...</p>
        ) : session ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#E8F8FA] border border-[#1AA1B3] rounded-lg p-5 mb-6"
          >
            <p className="text-gray-800 font-medium mb-1">
              <span className="font-bold">Amount Donated:</span>{" "}
              {session.amount_total / 100} {session.currency.toUpperCase()}
            </p>
            <p className="text-gray-600 text-sm">
              Payment Status:{" "}
              <span className="capitalize font-semibold text-green-700">
                {session.payment_status}
              </span>
            </p>
          </motion.div>
        ) : (
          <p className="text-red-500">Could not load donation details.</p>
        )}

        <div className="flex flex-col gap-3 mt-4">
          <Link
            to="/donate"
            className="inline-block bg-[#F9A813] text-[#980A26] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#e0a111] hover:scale-105 transition-all duration-300"
          >
            Make Another Donation
          </Link>

          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://p-masemola-foundation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#127986] hover:underline"
          >
            💬 Share your contribution on Facebook
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default DonateSuccess;
