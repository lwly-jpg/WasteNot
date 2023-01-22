const express = require("express");
const router = express.Router();

const {
  signUp,
  logIn,
  favouriteRecipe,
} = require("../controllers/userController");

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/favourite", favouriteRecipe);

module.exports = router;
