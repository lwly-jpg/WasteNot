// const { Pool } = require("pg");
const { Client } = require("pg");
require("dotenv").config();

const client = new Client(process.env.PG_CONNECT);

client.connect();

module.exports = client;

// const pool = new Pool({
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database: process.env.PG_DB,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
// });

// module.exports = pool;
