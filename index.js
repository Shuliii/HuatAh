const express = require("express");
const connection = require("./routes/db");
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

app.post("/search", (req, res) => {
  const queryString = `SELECT * FROM BETLIST where Username = '${req.body.firstName}' and Match_Result is NULL`;
  connection.query(queryString, (err, results) => {
    err && console.log(err);
    res.render("searchResult.ejs", { results });
  });
});

app.get("/search", (req, res) => {
  res.render("search.ejs");
});

app.listen(port, () => {
  console.log("Running on port 3000");
});
