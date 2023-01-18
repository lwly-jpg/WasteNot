const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require('dotenv').config();

const port = process.env.PORT;
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Testing if server is up");
});

app.get("/recipes", async (req, res) => {
  const ingredients = req.query.ingredients;
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients}&app_id=${appId}&app_key=${appKey}`

  try {
    const response = await axios.get(url);

    res.status(200).json(response.data);

  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
