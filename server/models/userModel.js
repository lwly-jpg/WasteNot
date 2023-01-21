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

  const sql =
    "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;";
  const user = await client.query(sql, [email, password]);

  return user;
};

module.exports = { createUser };
