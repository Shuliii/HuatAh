const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/Dota2", (req, res) => {
  res.render("index");
});

app.get("/CS:GO", (req, res) => {
  res.send("hello CS:GO");
});

app.get("/Valorant", (req, res) => {
  res.send("hello Valorant");
});

app.get("/NBA", (req, res) => {
  fs.readFile(`${__dirname}/NBA.json`, (err, data) => {
    if (err) throw err;
    let results = JSON.parse(data);
    let empty = [];

    const betLists = results.map((result) => result.bet_list);
    [...betLists].map((bet) => {
      bet.map((el) => {
        console.log(el.name);
      });
    });
    res.render("index", { results });
  });
});

app.get("/Soccer", (req, res) => {
  res.send("hello Soccer");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
