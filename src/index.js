const express = require("express");
const app = express(); // objeto app
const cors = require("cors");
const db = require("./database");

app.set("port", process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const query = "SELECT * FROM user";
  db.query(query, function (error, results, fields) {
    res.json(results);
  });
});

app.post("/", (req, res) => {
  const obj = req.body;
  console.log("====================================");
  console.log(obj);
  console.log("====================================");
  const query = "INSERT INTO user SET ?";
  db.query(query, obj, function (error, results) {
    if (error) throw error;
    console.log("1 record inserted");
    res.send({ token: "1234567" });
  });
});

app.listen(app.get("port"), () => {
  console.log("listening " + "port");
});
