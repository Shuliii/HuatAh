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

app.post("/find", (req, res) => {
  const queryString = `SELECT * FROM BETLIST where Username = '${req.body.firstName}'`;
  connection.query(queryString, (err, data) => {
    err ? console.log(err) : console.log(data);
    res.render("index", { data });
  });
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.listen(port, () => {
  console.log("Running on port 3000");
});

// <% data.forEach((el) => { %>
//   <div class="data">
//     <h1><%= el.Match_Name %></h1>
//   </div>
//   <% }) %>
