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
  res.json({ test: "adawda" });
});

let provider = "https://auth.riotgames.com";
let authorizeUrl = provider + "/authorize";
let tokenUrl = provider + "/token";
let appBaseUrl = "";
let clientID = "a7d4583c-ab9a-4a89-895a-953388b79c82";

app.get("/testing", (req, res) => {
  const link =
    "https://auth.riotgames.com/authorize?redirect_uri=http://localhost:3000/oauth&client_id=a7d4583c-ab9a-4a89-895a-953388b79c82&response_type=code&scope=openid";

  res.json({ link });
});

//after they complete their login
app.post("/callback", (req, res) => {
  res.send("/");
});

//after they log out.
app.post("/logout", (req, res) => {});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});



