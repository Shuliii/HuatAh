const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.get("/Dota2", (req, res) => {
  fs.readFile(`${__dirname}/data/Dota.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/CS:GO", (req, res) => {
  fs.readFile(`${__dirname}/data/CSGO.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);

    results = results.filter( result => {
      let now = new Date().getTime();
      let future = Date.parse(result.time)
      return future - now;
    })

    res.render("index", { results });
  });
});

app.get("/Valorant", (req, res) => {
  fs.readFile(`${__dirname}/data/Valorant.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/NBA", (req, res) => {
  fs.readFile(`${__dirname}/data/NBA.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/Soccer", (req, res) => {
  fs.readFile(`${__dirname}/data/Soccer.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});
