const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const dota2Router = require("./routes/dota2.js");
const csgoRouter = require("./routes/csgo.js");
const valorantRouter = require("./routes/valorant.js");
const nbaRouter = require("./routes/nba.js");
const soccerRouter = require("./routes/soccer.js");

app.use("/Dota2", dota2Router);
app.use("/CS:GO", csgoRouter);
app.use("/Valorant", valorantRouter);
app.use("/NBA", nbaRouter);
app.use("/Soccer", soccerRouter);

// app.post("/submit", (req, res) => {
//   console.log(req.originalUrl);
//   console.log(req.body);
//   // res.redirect("/");
// });

// app.get("/Dota2", (req, res) => {
//   fs.readFile(`${__dirname}/data/Dota.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     let results = JSON.parse(data);
//     res.render("index", { results });
//   });
// });

// app.get("/CS:GO", (req, res) => {
//   fs.readFile(`${__dirname}/data/CSGO.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     let results = JSON.parse(data);

//     results = results.filter((object) => {
//       console.log(Date.parse(object.time) - new Date().getTime());
//       return Date.parse(object.time) - new Date().getTime() >= 0;
//     });

//     console.log(results);

//     res.render("index", { results });
//   });
// });

// app.get("/Valorant", (req, res) => {
//   fs.readFile(`${__dirname}/data/Valorant.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     let results = JSON.parse(data);
//     res.render("index", { results });
//   });
// });

// app.get("/NBA", (req, res) => {
//   fs.readFile(`${__dirname}/data/NBA.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     let results = JSON.parse(data);
//     res.render("index", { results });
//   });
// });

// app.get("/Soccer", (req, res) => {
//   fs.readFile(`${__dirname}/data/Soccer.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     let results = JSON.parse(data);
//     res.render("index", { results });
//   });
// });

app.listen(port, () => {
  console.log("Running on port 3000");
});
