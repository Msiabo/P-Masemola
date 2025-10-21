// src/pages/DonateCancel.jsx
export default function DonateCancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-8">
      <h1 className="text-3xl font-bold text-red-700">⚠️ Payment Cancelled</h1>
      <p className="mt-4 text-gray-700 text-center">
        Your donation wasn’t completed. You can try again anytime.
      </p>
      <a
        href="/donate"
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Try Again
      </a>
    </div>
  );
}
