const mysql = require("mysql");
const db = mysql.createConnection({
  host: "remotemysql.com",
  user: "hXpx6dv4lD",
  password: "DICouiPQyw",
  database: "hXpx6dv4lD",
});

module.exports = db;
