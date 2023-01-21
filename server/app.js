const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipes");
const userRoutes = require("./routes/users");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/recipes", recipeRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
