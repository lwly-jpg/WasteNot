const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipes");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Testing if server is up");
});

app.use("/recipes", recipeRoutes);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
