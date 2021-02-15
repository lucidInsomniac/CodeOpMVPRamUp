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
      let results = await db("SELECT ord_id, ord_date, vendor,team, item, size, qty, part_ord, full_ord from orders ORDER BY ord_date ASC;");
  
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

      module.exports = router;