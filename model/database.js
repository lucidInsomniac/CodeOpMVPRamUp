require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "rampup",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = "DROP TABLE if exists inventory; CREATE TABLE inventory(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, ord_date VARCHAR(10), vendor VARCHAR(50), team VARCHAR(50), item VARCHAR(300), size VARCHAR(10), qty INT NOT NULL, partial BOOLEAN NOT NULL, full BOOLEAN NOT NULL);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `items` was successful!");

    console.log("Closing...");
  });

  con.end();
});


