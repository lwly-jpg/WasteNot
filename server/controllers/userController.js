const client = require("../database");

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const sql = "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id;"

  try {
    const user = await client.query(
      sql, [email, password]
    );

    const user_id = user.rows[0].id;

    res.status(200).json({email: email, user_id: user_id});
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  createUser
}