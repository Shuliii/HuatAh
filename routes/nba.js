const express = require("express");
const fs = require("fs");
const path = require("path");
const connection = require("./db");
const router = express.Router();

router.get("/", (req, res) => {
  const sthElse = path.join(__dirname, "/../data/NBA.json");
  fs.readFile(`${sthElse}`, (err, data) => {
    if (err) {
      console.log(err);
    }
    let results = JSON.parse(data);
    results = results.filter((object) => {
      return Date.parse(object.time) - new Date().getTime() >= 0;
    });
    res.render("index", { results });
  });
});

router.post("/submit", (req, res) => {
  let newbetamount = Number(req.body.betamount);
  let newoddsamount = Number(req.body.odds);
  const sthElse = path.join(__dirname, "/../data/NBA.json");

  fs.readFile(`${sthElse}`, (err, data) => {
    if (err) {
      console.log(err);
    }
    let results = JSON.parse(data);
    results = results.filter(
      (object) => object.match_name == req.body.matchName
    );

    if (Date.parse(results[0].time) > new Date().getTime()) {
      const queryString = `INSERT INTO BETLIST (ID, Username, Match_Name, Bet_Name, Amount, Odds) values (NULL, '${req.body.username}','${req.body.matchName}', '${req.body.betName}', ${newbetamount}, ${newoddsamount})`;
      connection.query(queryString, (err, result) => {
        err ? console.log(err) : console.log("successful");
      });
      res.redirect("/NBA");
    } else {
      res.redirect("/NBA");
    }
  });
});

module.exports = router;
