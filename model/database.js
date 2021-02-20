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

  let sql = "CREATE TABLE inventory (ord_id INT NOT NULL AUTO_INCREMENT, ord_date VARCHAR (10), \
            vendor VARCHAR (20),team VARCHAR (30), item VARCHAR (100), size VARCHAR (10),\
            qty INT NOT NULL,  \
            part_ord VARCHAR (3) NOT NULL, full_ord VARCHAR (3) NOT NULL, PRIMARY KEY (ord_id)\
            );"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Yay! Your inventory table was created successfully!");

    console.log("Bye bye for now :) ...");
  });

  con.end();
});


