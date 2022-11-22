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

// <% data.forEach((el) => { %>
//   <div class="data">
//     <h1><%= el.Match_Name %></h1>
//   </div>
//   <% }) %>

/* <div class="search-content">
        <!-- <div class="search-balance">
          test1
        </div>
        <div class="search-active-bets">
          <h1>Active Bets</h1>
          <div class="active-bets">
            <h2>Team1 vs Team2</h2>
            <div class="active-bets-details">
              <h3>Betting on: <span>Team1 Winner</span></h3>
              <h3>Amount: <span>20</span></h3>
              <h3>Odds: <span>1.93</span></h3>
            </div>
            <div class="potential">
              <h3>Potential Winnings: <span>18.6</span></h3>
            </div>
          </div>
          <div class="active-bets">
            <h2>Team1 vs Team2</h2>
            <div class="active-bets-details">
              <h3>Betting on: <span>Team1 Winner</span></h3>
              <h3>Amount: <span>20</span></h3>
              <h3>Odds: <span>1.93</span></h3>
            </div>
            <div class="potential">
              <h3>Potential Winnings: <span>18.6</span></h3>
            </div>
          </div>
          <% results.forEach((result) => { %>
            <div class="active-bets">
              <h2><%= result.Match_Name %></h2>
              <div class="active-bets-details">
                <h3>Betting on: <span><%= result.Bet_Name %></span></h3>
                <h3>Amount: <span><%= result.Amount %></span></h3>
                <h3>Odds: <span><%= result.Odds %></span></h3>
              </div>
              <div class="potential">
                <h3>Potential Winnings: <span><% result.Amount * (result.Odds - 1) %></span></h3>
              </div>
            </div>
          <% }) %>
          <div class="active-bets">
            <h2>Team1 vs Team2</h2>
            <div class="active-bets-details">
              <h3>Betting on: <span>Team1 Winner</span></h3>
              <h3>Amount: <span>20</span></h3>
              <h3>Odds: <span>1.93</span></h3>
            </div>
            <div class="potential">
              <h3>Potential Winnings: <span>18.6</span></h3>
            </div>
          </div>
        </div> -->
      </div> */
