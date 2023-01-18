const express = require("express");
const router = express.Router();
const { searchRecipes, getRecipe } = require("../controllers/recipesController")

router.get("/", searchRecipes);

router.get("/:id", getRecipe);

module.exports = router;


