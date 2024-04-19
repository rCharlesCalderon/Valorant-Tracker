const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({ users: ["Userone"] });
});

//player search name
//send data to backend to make another fetch req becuz of format issue
//get back player puuid

app.post("/callback", (req, res) => {
    res.json({ users: ["CALLBACK PAGE TESTING"] });
});

app.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



app.get("/ValorantGamertag", (req, res) => {
  res.json({ testing: "awdadwa" });
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
