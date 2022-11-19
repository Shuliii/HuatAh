const express = require("express");
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

app.listen(port, () => {
  console.log("Running on port 3000");
});
