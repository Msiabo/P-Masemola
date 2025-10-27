const admin = require("firebase-admin");

if (!admin.apps.length) {
  // Check that all required env vars exist
  const requiredVars = [
    "FIREBASE_PROJECT_ID",
    "FIREBASE_PRIVATE_KEY",
    "FIREBASE_CLIENT_EMAIL",
  ];

  requiredVars.forEach((v) => {
    if (!process.env[v]) {
      throw new Error(`Missing required Firebase env var: ${v}`);
    }
  });

  const serviceAccount = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  };

  try {
    console.log("🔥 Initializing Firebase Admin for project:", serviceAccount.project_id);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://p-masemola-foundation-default-rtdb.firebaseio.com",
    });

    console.log("✅ Firebase Admin initialized successfully");
  } catch (error) {
    console.error("❌ Firebase Admin initialization failed:", error);
    throw error; // Fail fast
  }
}

const db = admin.database(); // Realtime Database
module.exports = { admin, db };
