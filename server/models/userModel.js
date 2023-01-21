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

  const emailSQL = "SELECT 1 FROM users WHERE email = $1 LIMIT 1;";
  const emailExists = await client.query(emailSQL, [email]);

  if (emailExists) {
    throw Error("Email is already in use.");
  }

  const createSQL =
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;";
  const user = await client.query(createSQL, [email, password]);

  return user;
};

module.exports = { createUser };
