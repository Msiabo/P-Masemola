// backend/firebaseAdmin.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://p-masemola-foundation-default-rtdb.firebaseio.com"
});

const db = admin.database(); // Realtime Database reference

module.exports = { admin, db };
