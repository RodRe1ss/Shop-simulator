const sql = require("./db.js");

const testConnection = async () => {
  try {
    await sql`SELECT 1`;
    console.log("Connected to PostgreSQL");
  } catch (err) {
    console.error(err);
  }
};

testConnection();

require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
