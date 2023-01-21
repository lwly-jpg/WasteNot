const client = require("../database");

const createUser = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  const sql = "INSERT INTO users (email, password) VALUES ($1, $2);"

  try {
    const response = await client.query(
      sql, [email, password]
    );

    res.status(200).json(response);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createUser
}