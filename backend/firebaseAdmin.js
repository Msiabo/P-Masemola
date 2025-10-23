const admin = require("firebase-admin");

if (!admin.apps.length) {
  // Parse the JSON string from your environment variable
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: serviceAccount.project_id,
      clientEmail: serviceAccount.client_email,
      privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"),
    }),
    databaseURL: "https://p-masemola-foundation-default-rtdb.firebaseio.com",
  });
}

const db = admin.database();

module.exports = { admin, db };
