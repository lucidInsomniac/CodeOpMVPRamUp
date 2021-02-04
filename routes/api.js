
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

/* the url is "/todos" not "/todos/items", because the 
          DB is a backend feature, and we don't want the 
          client side to know the structure, like how API 
          don't need to want to know how it functions, just 
          that it functions.

          APIs should not require knowledge of the underlying 
          implementation. Think of the Stack class: I only 
          have to know about push() and pop(). I don’t have 
          to know how the data I push is actually managed 
          inside the Stack class: With an array? A linked 
          list? Something else?  */


//client request for homepage, Browser will prompt you to got to "/api"
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//GET all data from DB
//!!!!!!Make sure url matches this!!!!!!!!!!
router.get("/rampup", async (req, res) => {
  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    //db data must be known, we tell MYSQL to select from the table called "items", NOT the DB "todos"
    //Has to be in MYSQL syntax
    let results = await db("SELECT * FROM items ORDER BY id ASC;");
    //check
    console.log("RESULTS", results);
    //you should send back the full list of items with status
    res.status(200).send(results.data); //data is an array of all the rows in the table
    //Catch any errors
  } catch (err) {
    //Response to error, 404 status with message
    res.status(500).send({ error: err.message });
    // 500 is server error will show if the table in the DB does not exist.
    // Ex: let results = await db("SELECT * FROM itemsz ORDER BY id ASC;");, then
    // Check on postman, it will render 500 server error
  }
});

//GET data by ID
router.get("/rampup/:id", async (req, res) => {
  //Get id from URL
  let id = req.params.id;
  //Tells MYSQL to select all rows from items
  //where the id matches the req.params.id
  //Has to be in MYSQL syntax
  let sql = `
    SELECT *
    FROM items
    WHERE id = ${id}
  `;

  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    // We need try block because something can go wrong with
    //these set of codes. Previous codes will not cause errors.

    //since it is async, we keep the link open to await a response for the DB
    // to select and returnt the matched id record
    let results = await db(sql);
    //returns obj and not the array for items, results.data is array, we want the index of [0]
    res.send(results.data[0]);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//POST new data, MAKE SURE SOURCE LINK IS SET TO : http://localhost:5000/api/todos/items2
//!!NEED TO MAKE SURE MYSQL HAS COLUMN "TASK" BEFORE TESTING
//Make sure http matches mysql table features, In MYSQL check table name: "items"(or whatever), and column called : "id" & "task"
//!!!!!!Make sure url matches this, and on Postman, make sure the raw is set to JSON  !!!!!!!!!!
router.post("/rampup/", async (req, res) => {
  // The request's body is available in req.body
  let { task, completed } = req.body;
  //Has to be in MYSQL syntax
  let sql = `
    INSERT INTO items (task, completed)
    VALUES ('${task}', ${completed})
  `;
  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    //inserts the data
    let results = await db(sql);
    //awaiting response to MYSQL to select all data, // If the query is successful
    //Has to be in MYSQL syntax
    results = await db("SELECT * FROM items");
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

//PUT data Update/Replace by ID
// Checks out on Postman :D
router.put("/rampup/:id", async (req, res) => {
  //Get id from URL
  let id = req.params.id;
  let completed = req.params.completed;

  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    //Tells MYSQL to select all tasks from table "items" with matching id from URL
    //Has to be in MYSQL syntax
    let sql = `SELECT * FROM items WHERE id = ${id}`;
    //awaiting response from DB to add new task
    let results = await db(sql);
    //If DB finds a value of 1 for the array length in our data array
    if (results.data.length === 1) {
      console.log(results.data.length);

      // Create new obj from request body, this needs to match the column being modified
      //in your update
      let { task } = req.body;
      // Make sure modified task doesn't try to change ID
      //Tells MYSQL to update new task in the table "items" by setting the column
      // called "task" with the matching id from URL
      //Has to be in MYSQL syntax

      /*!!!! We need to change this for updateTask!!!   
                                  1 - On MYSQL to create new column: 
                                  
                                    ALTER TABLE items ADD Completed BOOLEAN NOT NULL; 
                                  2- In VScode, we modify 'false'to 'true' , using this command for the variable "sql":
                                    UPDATE items SET Completed = 1 WHERE id = ${id};
                                    
                                  3- To get DB to return data list with string true or false use,
                                      We need to explicity tell it how:

                                  SELECT id, task, IF(Completed, 'true', 'false') Completed FROM items;
                                    
                                  */

      sql = `               
        UPDATE items
        SET Completed = ${!completed}
        WHERE id = ${id}
      `;

      //awaiting response on adding the new task to the DB
      await db(sql);
      // Replace old task with modified one
      //Has to be in MYSQL syntax
      results = await db("SELECT * FROM items;");
      //And return the full list of items when successful
      res.send(results.data);
    } else {
      // else task not found; return 404 status code, does not exist in table "items"
      res.status(404).send({ error: "Oh no you broke me :(" });
    }
    //catches any errors with error 500 server status and message
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//DELETE data by ID
//Checks out on Postman :D too! YAY!
router.delete("/rampup/:id", async (req, res) => {
  //Get id from URL
  let id = req.params.id;
  //Whenever we access a DB with "async" and "await", we need the "try" and "catch"
  try {
    //Tell MYSQL to select all from the table "items with the id matching the id from URL
    //Has to be in MYSQL syntax
    let sql = `SELECT * FROM items WHERE id = ${id}`;
    //awaiting response from DB to add new task
    let results = await db(sql);
    //If DB finds a value of 1 for the array length in our data array
    if (results.data.length === 1) {
      //Tells MYSQL to delete a task in the table "items" by setting the column
      // called "task" with the matching id from URL
      //Has to be in MYSQL syntax
      sql = `DELETE FROM items WHERE id = ${id}`;
      // Delete the task selected task
      await db(sql);
      //Awaiting response from MYSQL to select all tasks from table "items"
      //Has to be in MYSQL syntax
      results = await db("SELECT * FROM items");
      //And return the full list of items when successful
      res.send(results.data);
    } else {
      // else task not found; return 404 status code, does not exist in table "items"
      res.status(404).send({ error: "Oh no you broke me :(" });
    }
    //catches any errors with error 500 server status and message
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
