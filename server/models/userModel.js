const validator = require("validator");
const bcrypt = require("bcrypt");
const client = require("../database");

const createUser = async (email, password) => {
  if (!email || !password) {
    throw Error("Both email and password are required.");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email address is invalid.");
  }

  await checkUserExists(email);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const createSQL =
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;";
  const user = await client.query(createSQL, [email, hashedPassword]);

  return user;
};

const logInUser = async (email, password) => {
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

const checkUserExists = async (email) => {
  const emailSQL = "SELECT * FROM users WHERE email = $1 LIMIT 1;";
  const emailExists = await client.query(emailSQL, [email]);

  if (emailExists.rowCount !== 0) {
    throw Error("Email is already in use.");
  }
}

module.exports = { createUser, logInUser };
