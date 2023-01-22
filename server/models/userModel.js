const validator = require("validator");
const bcrypt = require("bcrypt");
const client = require("../database");



module.exports = { createUser, logInUser };
