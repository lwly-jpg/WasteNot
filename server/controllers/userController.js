const client = require("../database");
const {createUser, logInUser} = require("../models/userModel");

const signUp = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await createUser(email, password);
    const user_id = user.rows[0].id;

    res.status(200).json({ email: email, user_id: user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await logInUser(email, password);
    const user_id = user.rows[0].id;

    res.status(200).json({ email: email, user_id: user_id });
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  signUp, logIn
};
