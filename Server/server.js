const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3001" }));
require("dotenv").config();
const daKey = process.env.VALORANT_API_KEY;
app.get("/", (req, res) => {
  res.json({ users: ["Userone"] });
});

//player search name
//send data to backend to make another fetch req becuz of format issue
//get back player puuid

app.post("/ValorantGamertag", (req, res) => {
  let input = req.body.inputData.split("#");
  let gamerTag = input[0];
  let tagLine = input[1];

  fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gamerTag}/${tagLine}?api_key=${daKey}`
  )
    .then((res) => res.json())
    .then((data) => res.json({ data }));
});

app.get("/ValorantGamertag", (req, res) => {
  res.json({ testing: "awdadwa" });
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
