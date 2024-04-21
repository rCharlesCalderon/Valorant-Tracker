const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
const port = process.env.PORT || 5002;
const passport = require("passport");
app.use(cors());
require("dotenv").config();
const daKey = process.env.VALORANT_API_KEY;
app.get("/", (req, res) => {
  res.json({ test: "adawda" });
});
//make env file

app.get("/testing", (req, res) => {
  const link =
    "https://auth.riotgames.com/authorize?redirect_uri=https://valorant-tracker-production-ffb1.up.railway.app/callback&client_id=a7d4583c-ab9a-4a89-895a-953388b79c82&response_type=code&scope=openid";

  res.json({ link });
});

//after they complete their login
app.post("/callback", (req, res) => {
  const redirectUrl = "http://localhost:3001/"; // Assuming React app is running on port 3001
  res.redirect(redirectUrl);
});

//after they log out.
app.post("/logout", (req, res) => {});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});



