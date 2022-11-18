const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.get("/Dota2", (req, res) => {
  fs.readFile(`${__dirname}/data/Dota.json`, (err, data) => {
    if (err) {
      return res.render("index", { results: "There is some error here" });
    }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/CS:GO", (req, res) => {
  fs.readFile(`${__dirname}/data/CSGO.json`, (err, data) => {
    if (err) {
      return res.render("index", { results: "There is some error here" });
    }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/Valorant", (req, res) => {
  fs.readFile(`${__dirname}/data/Valorant.json`, (err, data) => {
    if (err) throw err;
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/NBA", (req, res) => {
  fs.readFile(`${__dirname}/data/NBA.json`, (err, data) => {
    if (err) throw err;
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/Soccer", (req, res) => {
  fs.readFile(`${__dirname}/data/Soccer.json`, (err, data) => {
    if (err) throw err;
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.listen(port, () => {
  console.log("Running on port 5000");
});
