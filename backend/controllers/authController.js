const { admin } = require("../firebaseAdmin");

// Register user
const registerUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const userRecord = await admin.auth().createUser({ email, password, displayName: name });
    res.status(201).json({ uid: userRecord.uid, email: userRecord.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login (get custom token)
const loginUser = async (req, res) => {
  try {
    const { uid } = req.body; // normally frontend sends Firebase ID token
    const token = await admin.auth().createCustomToken(uid);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
