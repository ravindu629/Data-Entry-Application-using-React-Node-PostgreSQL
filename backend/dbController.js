const { Pool } = require("pg");

const db = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TestDB",
  password: "it19208022",
  port: 5432,
});

const insertRecord = async (req, res) => {
  const { name, age, city } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO Ravindu_table (name, age, city) VALUES ($1, $2, $3) RETURNING *",
      [name, age, city]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const getRecords = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM Ravindu_table");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = { insertRecord, getRecords };
