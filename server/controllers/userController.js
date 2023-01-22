const client = require("../database");
const validator = require("validator");
const bcrypt = require("bcrypt");

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
    const user = await handleLogIn(email, password);
    const user_id = user.rows[0].id;

    res.status(200).json({ email: email, user_id: user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const favouriteRecipe = async (req, res) => {
  const { uri, label, image, user_id } = req.body;

  try {
    const favouriteSQL = "INSERT INTO recipes (uri, label, image, user_id) VALUES ($1, $2, $3, $4) RETURNING id;";
    const favouritedRecipe = await client.query(
      favouriteSQL, [uri, label, image, user_id]
    );

    const recipe_id = favouritedRecipe.rows[0].id;

    res.status(200).json({ label: label, recipe_id: recipe_id });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleLogIn = async (email, password) => {
  if (!email || !password) {
    throw Error("Both email and password are required.");
  }

  const logInSQL = "SELECT * FROM users WHERE email = $1;";

  const user = await client.query(logInSQL, [email])

  if (user.rowCount === 0) {
    throw Error('Username or password invalid.');
  }

  const match = await bcrypt.compare(password, user.rows[0].password);
  
  if (!match) {
    throw Error('Username or password invalid.');
  }

  return user;
}

module.exports = {
  signUp,
  logIn,
  favouriteRecipe
};
