const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbController = require("./dbController");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/insertRecord", dbController.insertRecord);
app.get("/api/getRecords", dbController.getRecords);

app.listen(5000, () => console.log("Server running on port 5000"));
