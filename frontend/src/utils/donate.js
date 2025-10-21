import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export const createPaymentIntent = async ({ amount, userId }) => {
  const response = await axios.post(`${API_URL}/api/donations/create-payment-intent`, {
    amount,
    userId,
  });
  return response.data;
};

export const saveDonation = async ({ userId, name, email, amount, paymentId, currency = "zar" }) => {
  const response = await axios.post(`${API_URL}/api/donations/save-donation`, {
    userId,
    name,
    email,
    amount,
    paymentId,
    currency,
  });
  return response.data;
};
