const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  const sthElse = path.join(__dirname, "/../data/Soccer.json");
  console.log(sthElse);
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
  console.log(req.originalUrl);
  console.log(req.body);
  res.redirect("/Soccer");
});

module.exports = router;
