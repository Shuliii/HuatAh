const express = require("express");
const connection = require("./routes/db");
const async = require("async");
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
  const queryString1 =
    "SELECT SUM(Balance) as balance FROM betlist WHERE Username = ?";
  const queryString2 =
    "SELECT * FROM betlist WHERE Username = ? and Match_Result is NULL";

  const queryString3 =
    "SELECT * FROM betlist where Username = ? and Match_Result is not NULL order by id desc limit ?;";
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
      res.render("searchResult.ejs", { results });
    }
  );
});

app.get("/search", (req, res) => {
  res.render("search.ejs");
});

app.listen(port, () => {
  console.log("Running on port 3000");
});

// const queryString = `SELECT * FROM BETLIST where Username = '${req.body.firstName}' and Match_Result is NULL`;
//   connection.query(queryString, (err, results) => {
//     err && console.log(err);
//     res.render("searchResult.ejs", { results });

// [
//   RowDataPacket {
//     ID: 2964,
//     Username: 'Vito',
//     Match_Name: 'Portugal vs Ghana',
//     Bet_Name: 'Ghana Winner',
//     Amount: 5,
//     Odds: 9,
//     Match_Result: null,
//     Bet_Result: null,
//     Balance: null
//   },
//   RowDataPacket {
//     ID: 2974,
//     Username: 'Vito',
//     Match_Name: 'Portugal vs Ghana',
//     Bet_Name: 'Draw',
//     Amount: 10,
//     Odds: 4.12,
//     Match_Result: null,
//     Bet_Result: null,
//     Balance: null
//   },
//   RowDataPacket {
//     ID: 2984,
//     Username: 'Vito',
//     Match_Name: 'Portugal vs Ghana',
//     Bet_Name: 'Under 3',
//     Amount: 10,
//     Odds: 1.92,
//     Match_Result: null,
//     Bet_Result: null,
//     Balance: null
//   }
// ]
