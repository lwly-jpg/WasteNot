require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT;


const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Testing if server is up");
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
