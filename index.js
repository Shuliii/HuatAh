const express = require("express");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const port = process.env.PORT || 3000;


function removePast(value1, value2) {
  return value1 - value2 >=0
}

app.get("/Dota2", (req, res) => {
  fs.readFile(`${__dirname}/data/Dota.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/CS:GO", (req, res) => {
  fs.readFile(`${__dirname}/data/CSGO.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);

    // results = results.map(el => {
    //   let now = new Date().getTime();
    //   console.log(`Now is ${now}`)
    //   let future = Date.parse(el.time)
    //   console.log(`Future is ${future}`)
    //   if (future - now >= 0) {
    //     console.log(now - future)
    //     return el;
    //   }
    // })

    // results.forEach(result => {
    //   let now = new Date().getTime();
    //   console.log(`Now is ${now}`)
    //   let future = Date.parse(el.time)
    //   console.log(`Future is ${future}`)
    //   if (future - now >= 0) {
    //     console.log(now - future)
    //     return el;

    results = results.filter(object => {
      console.log(Date.parse(object.time) - new Date().getTime())
      return (Date.parse(object.time) - new Date().getTime() >= 0)
    })

    console.log(results)

    res.render("index", { results });
  });
});

app.get("/Valorant", (req, res) => {
  fs.readFile(`${__dirname}/data/Valorant.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/NBA", (req, res) => {
  fs.readFile(`${__dirname}/data/NBA.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.get("/Soccer", (req, res) => {
  fs.readFile(`${__dirname}/data/Soccer.json`, (err, data) => {
    if (err) { console.log(err) }
    let results = JSON.parse(data);
    res.render("index", { results });
  });
});

app.listen(port, () => {
  console.log("Running on port 5000");
});
