const axios = require("axios");
require("dotenv").config();
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
const edamam = "https://api.edamam.com/api/recipes/v2";

const searchRecipes = async (req, res) => {
  const ingredients = req.query.ingredients;
  const url = `${edamam}?type=public&q=${ingredients}&app_id=${appId}&app_key=${appKey}`;

  try {
    const response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};

const getRecipe = async (req, res) => {
  const { id } = req.params;
  const url = `${edamam}/${id}?type=public&app_id=${appId}&app_key=${appKey}`;

  try {
    const response = await axios.get(url);

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  searchRecipes,
  getRecipe,
};
