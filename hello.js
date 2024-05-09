const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const mongoose = require("mongoose");

const PORT = 8000;

mongoose.connect("mongodb://127.0.0.1:27017/my-site");



const userSchema = new mongoose.Schema({
  First_name: {
    type: String,
    required: true,
  },

  Last_name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  gender: {
    type: String,
  },

  job_title:{
    type:String,
  }
});

const model = mongoose.model("model", userSchema);



console.log("result", result);

return res.status(201).json({msg: "success"});

app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Hello from middleware 2");
  next();
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  const body = req.body;
  if(
    !body||
    !body.first_name||
    !body.last_name||
    !body.email||
    !body.gender
  ){
    return res.status(400).json({msg:"All fields are req..."})
});

const result = await model.create({
  firstName: body.First_name,
  lastName:body.last_name,
  email:body.email,
  gender : body.gender,
  jobTitle: body.job_title,
})

app.listen(PORT);
