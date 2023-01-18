const express = require("express");
const router = express.Router();
const { searchRecipes } = require("../controllers/recipesController")

router.get("/", searchRecipes);

module.exports = router;


