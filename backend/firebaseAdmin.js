require("dotenv").config();
const admin = require("firebase-admin");

// ✅ Vercel-only: load service account from environment variable
if (!process.env.FIREBASE_SERVICE_ACCOUNT) {
  throw new Error("❌ FIREBASE_SERVICE_ACCOUNT environment variable not set!");
}

let serviceAccount;
try {
  serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  // Fix the newlines in the private key
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
} catch (err) {
  console.error("❌ Invalid FIREBASE_SERVICE_ACCOUNT JSON:", err);
  throw err;
}

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://p-masemola-foundation-default-rtdb.firebaseio.com",
});

const db = admin.database();
module.exports = { admin, db };

