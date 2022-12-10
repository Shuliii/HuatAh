const express = require("express");
const path = require("path");
const async = require("async");

const fs = require("fs");

const connection = require("./routes/db");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const valorantPath = path.join(__dirname, "/data/Valorant.json");
  const csgoPath = path.join(__dirname, "/data/CSGO.json");
  const nbaPath = path.join(__dirname, "/data/NBA.json");
  const dotaPath = path.join(__dirname, "/data/Dota2.json");
  const soccerPath = path.join(__dirname, "/data/Soccer.json");

  async.parallel(
    [
      function (callback) {
        fs.readFile(`${nbaPath}`, (err, data) => {
          err && console.log(err);
          let results = JSON.parse(data);
          results = results.filter((object) => {
            return Date.parse(object.time) - new Date().getTime() >= 0;
          });
          callback(null, results);
        });
      },
      function (callback) {
        fs.readFile(`${soccerPath}`, (err, data) => {
          err && console.log(err);
          let results = JSON.parse(data);
          results = results.filter((object) => {
            return Date.parse(object.time) - new Date().getTime() >= 0;
          });
          callback(null, results);
        });
      },
      function (callback) {
        fs.readFile(`${dotaPath}`, (err, data) => {
          err && console.log(err);
          let results = JSON.parse(data);
          results = results.filter((object) => {
            return Date.parse(object.time) - new Date().getTime() >= 0;
          });
          callback(null, results);
        });
      },
      function (callback) {
        fs.readFile(`${csgoPath}`, (err, data) => {
          err && console.log(err);
          let results = JSON.parse(data);
          results = results.filter((object) => {
            return Date.parse(object.time) - new Date().getTime() >= 0;
          });
          callback(null, results);
        });
      },
      function (callback) {
        fs.readFile(`${valorantPath}`, (err, data) => {
          err && console.log(err);
          let results = JSON.parse(data);
          results = results.filter((object) => {
            return Date.parse(object.time) - new Date().getTime() >= 0;
          });
          callback(null, results);
        });
      },
    ],
    function (err, results) {
      res.render("index", { results });
    }
  );
});

app.post("/submit", (req, res) => {
  let newbetamount = Number(req.body.betamount);
  let newoddsamount = Number(req.body.odds);
  let game = req.body.game;
  const sthElse = path.join(__dirname, `/data/${game}.json`);
  fs.readFile(`${sthElse}`, (err, data) => {
    err && console.log(err);
    let results = JSON.parse(data);
    results = results.filter((object) => {
      return object.match_name == req.body.matchName;
    });

    if (Date.parse(results[0].time) > new Date().getTime()) {
      const queryString = `INSERT INTO BETLIST (ID, Username, Match_Name, Bet_Name, Amount, Odds) values (NULL, '${req.body.username}','${req.body.matchName}', '${req.body.betName}', ${newbetamount}, ${newoddsamount})`;
      connection.query(queryString, (err, result) => {
        err ? console.log(err) : console.log("successful");
        res.status(204).send();
      });
    } else {
      res.redirect("/");
    }
  });
});

app.post("/search", (req, res) => {
  const queryString1 =
    "SELECT SUM(Balance) as balance FROM betlist WHERE Username = ?";
  const queryString2 =
    "SELECT * FROM betlist WHERE Username = ? and Bet_Result is NULL";

  const queryString3 =
    "SELECT * FROM betlist where Username = ? and Bet_Result is not NULL order by id desc limit ?;";
  async.parallel(
    [
      function (callback) {
        connection.query(queryString1, [req.body.firstName], (err, result) => {
          callback(null, result);
        });
      },
      function (callback) {
        connection.query(queryString2, [req.body.firstName], (err, result) => {
          callback(null, result);
        });
      },
      function (callback) {
        connection.query(
          queryString3,
          [req.body.firstName, 5],
          (err, result) => {
            callback(null, result);
          }
        );
      },
    ],
    function (err, results) {
      res.render("search.ejs", { results });
    }
  );
});

app.listen(port, () => {
  console.log("Running on port 3000");
});
