const mysql = require("mysql");

const connection = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "be62820570045a",
  password: "af6180b5",
  database: "heroku_ed1b580caca1292",
});

// connection.connect(function (err) {
//   if (err) throw err;
// });

module.exports = connection;

// CREATE TABLE betlist (
//   ID INT NOT NULL AUTO_INCREMENT,
//   Username varchar(255) NOT NULL,
//   Match_Name varchar(255) NOT NULL,
//   Bet_Name varchar(255) NOT NULL,
//   Amount INT NOT NULL,
//   Odds DOUBLE NOT NULL,
//   Match_Result varchar(20),
//   Bet_Result varchar(20),
//   Balance DOUBLE,
//   PRIMARY KEY (ID)
// );
