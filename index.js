const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/Dota2", (req, res) => {
  res.render("index");
});

app.get("/CS:GO", (req, res) => {
  fs.readFile(`${__dirname}/CSGO.json`, (err, data) => {
    if (err) {
      return res.render("index", { results: "There is some error here" });
    }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/Valorant", (req, res) => {
  fs.readFile(`${__dirname}/Valorant.json`, (err, data) => {
    if (err) throw err;
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/NBA", (req, res) => {
  fs.readFile(`${__dirname}/NBA.json`, (err, data) => {
    if (err) throw err;
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/Soccer", (req, res) => {
  res.send("hello Soccer");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
