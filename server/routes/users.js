const express = require("express");
const router = express.Router();

const { signUp } = require("../controllers/userController");

router.post("/", signUp);

module.exports = router;