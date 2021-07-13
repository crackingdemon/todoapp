const express = require("express");
const mongoose = require ('mongoose');

const app = express();

//mongoose

mongoose.connect("mongodb://localhost/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//mim

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");


app.use(require("./routes/index"))
app.use(require("./routes/todo"))
//server

app.listen(8000,()=>console.log("connected to port"))