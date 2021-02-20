// Need to create a new file for new routes, and change in app.js to add new routes 


/*************Boiler plate************ */

//importing necessary components and depenedencies
var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");
const { route } = require("../app");

/****************************Middleware*********************** */


//This lets the server read JSON from the client
//request and convers them to JS
router.use(bodyParser.json());


//This works with actual DB and test data on postman
//GET all inventory data from DB, only show if Full = Yes
router.get("/", async (req, res) => {
    //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
    try {
      //db data must be known, we tell MYSQL to select from the table called "inventory", since we are
      //already in the DB rampup
      //Has to be in MYSQL syntax
      let results = await db("SELECT * from inventory ORDER BY ord_date ASC;");
  
      if (results.data.length) {
        //check
        console.log("RESULTS", results);
        //send back the full list of items with status
        res.status(200).send(results.data); 
        } else { 
        res.status(404).send({ error: "Db is inaccesible or empty." });
        }
        //Catch any errors
      } catch (err) {
        res.status(500).send({ error: err.message });
      }
 });         


   //POST new receiving data     -----> Actual Test works on Postman
  //!!NEED TO MAKE SURE MYSQL HAS COLUMNS BEFORE TESTING
  //!!!!!!Make sure Postman body raw is set to JSON  !!!!!!!!!!
  // Make sure your sql commands match their data type, you can check by using command
  // in MYSQL "describe inventory" 
  router.post("/", async (req, res) => {
    // The request's body is available in req.body
    let { ordDate, vendor, team, item, size, qty, part_ord, full_ord} = req.body; //<== This needs to match up with frontend Apps.js params, otherwise you get "undefined" values for DB
    //check values
    console.log('BACKEND POST', ordDate, vendor, team, item, size, qty,part_ord,full_ord)

    //Has to be in MYSQL syntax
    let sql = `INSERT INTO inventory 
    (ord_date,
      vendor,
      team,
      item,
      size,
      qty,
      part_ord,   
      full_ord
      ) VALUES (
        "${ordDate}",
        "${vendor}",
        "${team}", 
        "${item}", 
        "${size}", 
        ${qty}, 
        "${part_ord}", 
        "${full_ord}"
        );
        `; 
    //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
    try {
      //inserts the data
      let results = await db(sql);
      //awaiting response to MYSQL to select all data, // If the query is successful
      //Has to be in MYSQL syntax
      results = await db("SELECT * from inventory ORDER BY ord_date ASC;");
      //you should send back the full list of items
      //console.log(results.data);
      res.status(201).send(results.data);
    } catch (err) {
      //Catch errors if any encountered
      //Response to error, 500 status with message
      // console.log(err.message)
      res.status(500).send({ error: err.message });
    }
  });

      module.exports = router; 