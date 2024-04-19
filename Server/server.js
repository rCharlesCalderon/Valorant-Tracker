const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || 5002;
app.use(cors());
require("dotenv").config();
const daKey = process.env.VALORANT_API_KEY;
app.get("/", (req, res) => {
});

app.post("/callback", (req, res) => {
  console.log(req.body);
  res.json({ test: "adawda" });
});
app.listen(port, () => {
  console.log("Server started on port 3000");
});



