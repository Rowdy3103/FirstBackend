const express = require("express");
const app = express();
const port = 4000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hey welcome to this page.");
});

app.get("/login", (req, res) => {
  res.send("Hey welcome to login.");
});

app.get("/ChaiAurBackend", (req, res) => {
  res.send("Welcome to my profile");
});

app.listen(process.env.port, () => {
  console.log(`Everything is fine at ${port}`);
});
