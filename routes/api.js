
/************************************************************************
 *                                                                      *
 *   You will need to add your password to the DB_PASS = YOUR PW.       *
 *   Once you add your PW there,  go to the ".gitignore"file and        *
 *   add the ".env.example" in there if it isn't already there.         *
 *   Otherwise your password for MYSQL will be exposed in your project  *
 *                                                                      *
 *   IMPORTANT: Git add, commit, and                                    *
 *   push NEED ON BOTH SERVER AND CLIENT!!                              *
 *                                                                      *
 *                                                                      *
 *********************************************************************/

/*************Boiler plate************ */

//importing necessary components and depenedencies
var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");
const { route } = require("../app");

/*****************Middleware*************** */

//This lets the server read JSON from the client
//request and convers them to JS
router.use(bodyParser.json());

/*******************Routes**************** */


//client request for homepage, Browser will prompt you to got to "/api"
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

//This works on Postman, url is 
//GET all data from DB
router.get("/rampup", async (req, res) => {
  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    //db data must be known, we tell MYSQL to select from the table called "inventory", since we are
    //already in the DB rampup
    //Has to be in MYSQL syntax
    let results = await db("SELECT * FROM inventory ORDER BY id ASC;");
    //check
    console.log("RESULTS", results);
    //you should send back the full list of items with status
    res.status(200).send(results.data); //data is an array of all the rows in the table
    //Catch any errors
  } catch (err) {
    //Response to error, 500status with message
    res.status(500).send({ error: err.message });
    // 500 is server error will show if the table in the DB does not exist.
    // Ex: let results = await db("SELECT * FROM inventorz ORDER BY id ASC;");, then
    // Check on postman, it will render 500 server error
  }
});

//Works on Postman
//GET data by ID
router.get("/rampup/:id", async (req, res) => {
  //Get id from URL
  let id = req.params.id;
  //Tells MYSQL to select all rows from items
  //where the id matches the req.params.id
  //Has to be in MYSQL syntax
  let sql = `
    SELECT *
    FROM inventory
    WHERE id = ${id}
  `;

  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    // We need try block because something can go wrong with
    //these set of codes. Previous codes will not cause errors.

    //since it is async, we keep the link open to await a response for the DB
    // to select and return the matched id record
    let results = await db(sql);
    //returns obj and not the array for items, results.data is array, we want the index of [0]
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//POST new data     -----> Works on Postman
//!!NEED TO MAKE SURE MYSQL HAS COLUMNS BEFORE TESTING
//!!!!!!Make sure Postman body raw is set to JSON  !!!!!!!!!!
// Make sure your sql commands match their data type, you can check by using command
// in MYSQL "describe inventory" 
router.post("/rampup", async (req, res) => {
  // The request's body is available in req.body
  let { ord_date, vendor, team, item, size, qty, partial, full } = req.body;
  //Has to be in MYSQL syntax
  let sql = `
    INSERT INTO inventory (ord_date, vendor, team, item, size, qty, partial, full)
    VALUES ('${ord_date}', '${vendor}', '${team}', '${item}', '${size}', ${qty}, ${partial}, ${full})
  `; 
  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    //inserts the data
    let results = await db(sql);
    //awaiting response to MYSQL to select all data, // If the query is successful
    //Has to be in MYSQL syntax
    results = await db("SELECT * FROM inventory");
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

// //PUT data Update/Replace by ID
// // Checks out on Postman :D
// router.put("/rampup/:id", async (req, res) => {
//   //Get id from URL
//   let id = req.params.id;
//   let completed = req.params.completed;

//   //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
//   try {
//     //Tells MYSQL to select all tasks from table "items" with matching id from URL
//     //Has to be in MYSQL syntax
//     let sql = `SELECT * FROM items WHERE id = ${id}`;
//     //awaiting response from DB to add new task
//     let results = await db(sql);
//     //If DB finds a value of 1 for the array length in our data array
//     if (results.data.length === 1) {
//       console.log(results.data.length);

//       // Create new obj from request body, this needs to match the column being modified
//       //in your update
//       let { task } = req.body;
//       // Make sure modified task doesn't try to change ID
//       //Tells MYSQL to update new task in the table "items" by setting the column
//       // called "task" with the matching id from URL
//       //Has to be in MYSQL syntax

//       /*!!!! We need to change this for updateTask!!!   
//                                   1 - On MYSQL to create new column: 
                                  
//                                     ALTER TABLE items ADD Completed BOOLEAN NOT NULL; 
//                                   2- In VScode, we modify 'false'to 'true' , using this command for the variable "sql":
//                                     UPDATE items SET Completed = 1 WHERE id = ${id};
                                    
//                                   3- To get DB to return data list with string true or false use,
//                                       We need to explicity tell it how:

//                                   SELECT id, task, IF(Completed, 'true', 'false') Completed FROM items;
                                    
//                                   */

//       sql = `               
//         UPDATE items
//         SET Completed = ${!completed}
//         WHERE id = ${id}
//       `;

//       //awaiting response on adding the new task to the DB
//       await db(sql);
//       // Replace old task with modified one
//       //Has to be in MYSQL syntax
//       results = await db("SELECT * FROM items;");
//       //And return the full list of items when successful
//       res.send(results.data);
//     } else {
//       // else task not found; return 404 status code, does not exist in table "items"
//       res.status(404).send({ error: "Oh no you broke me :(" });
//     }
//     //catches any errors with error 500 server status and message
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

// //DELETE data by ID
// //Checks out on Postman :D too! YAY!
// router.delete("/rampup/:id", async (req, res) => {
//   //Get id from URL
//   let id = req.params.id;
//   //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
//   try {
//     //Tell MYSQL to select all from the table "items with the id matching the id from URL
//     //Has to be in MYSQL syntax
//     let sql = `SELECT * FROM items WHERE id = ${id}`;
//     //awaiting response from DB to add new task
//     let results = await db(sql);
//     //If DB finds a value of 1 for the array length in our data array
//     if (results.data.length === 1) {
//       //Tells MYSQL to delete a task in the table "items" by setting the column
//       // called "task" with the matching id from URL
//       //Has to be in MYSQL syntax
//       sql = `DELETE FROM items WHERE id = ${id}`;
//       // Delete the task selected task
//       await db(sql);
//       //Awaiting response from MYSQL to select all tasks from table "items"
//       //Has to be in MYSQL syntax
//       results = await db("SELECT * FROM items");
//       //And return the full list of items when successful
//       res.send(results.data);
//     } else {
//       // else task not found; return 404 status code, does not exist in table "items"
//       res.status(404).send({ error: "Oh no you broke me :(" });
//     }
//     //catches any errors with error 500 server status and message
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// });

module.exports = router;
