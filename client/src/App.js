// this will be the dashboard view
import React, { useState, useEffect} from 'react' 
import SideBar from './components/SideBar'
import Routes from './components/Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'



// This displays all the components, react-router to coordinate
export default function App() {

  //state for collection of inventory from OrdersForm, saved as array
  const [partOrders, setPartOrders] = useState([]);

  //state for collection completed orders, saved as array
  const [fullOrders, setFullOrders] = useState([]);

  //state for all existing and new orders, saved as array
  const [allOrders, setAllOrders] = useState([]);

  //state for search bar query function, saved as string
  const [ query, setQuery] = useState("")

  //Test Function for Mock Display ONLY
  // function addOrder(newOrder) {
  //     console.log('parent-newOrd', newOrder)
  //     setOrders((state) => [...state, newOrder]);
  //   }
  //   console.log('parent-orders', orders)


/************************************************************GET DATA************************************************************* */

    //useEffect hook for Inventory.js to Get ALL existing and new orders
  useEffect(() => {
    //FETCH DONE
    fetch("/allorders") //this connects to the server api.js
      // our promise for fetch, instead of using "async", "wait", and "try"
      //This is the request
      .then(response => response.json())
      //this is the response returned with actual data
      .then(allOrders => {
        console.log(allOrders);
        // upon success, update tasks
        setAllOrders(allOrders);
        //check
        console.log( 'fetch', allOrders)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }, []); //gets saved in the state


  //useEffect hook for PartOrd.js  to Get orders ONLY IF FULL ORDER = NO
  useEffect(() => {
    //FETCH DONE
    fetch("/part_orders") //this connects to the server api.js
      // our promise for fetch, instead of using "async", "wait", and "try"
      //This is the request
      .then(response => response.json())
      //this is the response returned with actual data
      .then(partOrders => {
        console.log(partOrders);
        // upon success, update tasks
        setPartOrders(partOrders);
        //check
        console.log( 'fetch', partOrders)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }, []); //gets saved in the state

  
  //useEffect hook for FullOrd.js to Get orders ONLY IF FULL ORDER = YES
  useEffect(() => {
    //FETCH DONE
    fetch("/full_orders") //this connects to the server api.js
      // our promise for fetch, instead of using "async", "wait", and "try"
      //This is the request
      .then(response => response.json())
      //this is the response returned with actual data
      .then(fullOrders => {
        console.log(fullOrders);
        // upon success, update tasks
        setFullOrders(fullOrders);
        //check
        console.log( 'fetch', fullOrders)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }, []); //gets saved in the state


  /******************************************************POST DATA*************************************************************** */

    //function to POST orders from OrdersForm.js to Inventory.js
    //Displays in Inventory, then sorts to relative to Partial or Full Orders based on order status
    function addOrder (order) {
      //pass order from Form BUT WE NEED TO DEFINE IT FIRST!!
      let newOrder = {  //<==== ALWAYS CHECK HERE FIRST BEFORE POST!!
        ordDate: order.ordDate,
        vendor: order.vendor,
        team: order.team,
        item: order.item,
        size: order.size,
        qty: order.qty,
        part_ord: order.part_ord,
        full_ord: order.full_ord
      }

      //Method default is alway GET, need to explicitly tell REACT to send POST
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json" //Description of file type is a JSON format
        },
        //method to convert "order"key and "newOrder"value JS int JSON when iput from body
        body: JSON.stringify(newOrder)
        
      };
      //check
      console.log("Parent-post", newOrder) // Data passes here

      //Shows DB in Inventory.js with new added entry
      fetch("/allorders", options) // ==> Make sure to ref ALL orders
       // our promise for fetch, instead of using "async", "wait", and "try"
       .then(response => response.json())
       //the response returned with actual data
       .then(allOrders => {
        //  console.log(orders);
         // upon success, update tasks
         setAllOrders(allOrders);
         //check
         console.log("Parent-setOrders", allOrders)
       })
       //catches error
       .catch(err => {
         // upon failure, show error message
         console.log("ERROR:", err.message);
       });

    }




  /***************************************************UPDATE DATA************************************************************* */

    //function to UPDATE PartOrd.js
    function updatePartOrder(order) {
      // update task from database
      // upon success, update tasks
      // upon failure, show error message
  
      //Method default is always GET, to change it, you need to
      //explicitly tell REACT to send PUT request
      let options = {
        method: "PUT", //We are updating a task
        headers: {
          "Content-Type": "application/json" //Description of file type is a JSON format
        },
  
        //elements into JSON elements from the data entered in the body
        body: JSON.stringify(partOrders)
      };
  
      fetch(`/part_orders/${order.ord_id}`, options)
        // our promise for fetch, instead of using "async", "wait", and "try"
        .then(response => response.json())
        //the response returned with actual data
        .then(partOrders => {
          console.log(partOrders);
          // upon success, update tasks
          setPartOrders(partOrders);
        })
  
        //catches error
        .catch(err => {
          // upon failure, show error message
          console.log("ERROR:", err.message);
        });
    }
  

    //function to UPDATE FullOrd.js
    function updateFullOrder(id) {
      // update task from database
      // upon success, update tasks
      // upon failure, show error message
  
      //Method default is always GET, to change it, you need to
      //explicitly tell REACT to send PUT request
      let options = {
        method: "PUT", //We are updating a task
        headers: {
          "Content-Type": "application/json" //Description of file type is a JSON format
        },
  
        //elements into JSON elements from the data entered in the body
        body: JSON.stringify(fullOrders)
      };
  
      fetch(`/full_orders/${id}`, options)
        // our promise for fetch, instead of using "async", "wait", and "try"
        .then(response => response.json())
        //the response returned with actual data
        .then(fullOrders => {
          console.log(fullOrders);
          // upon success, update tasks
          setFullOrders(fullOrders);
        })
  
        //catches error
        .catch(err => {
          // upon failure, show error message
          console.log("ERROR:", err.message);
        });
    }
  


  /************************************************DELETE DATA********************************************************************* */
  function deletePartOrder(id) {
    //Method default is always GET, to change it, you need to
    //explicitly tell REACT to send DELETE request
    let options = {
      method: "DELETE", //We are removing an existing task from our list of tasks
      //method to convert the "task" key and "tasks" value JS
      //elements into JSON elements from the data entered in the body
      body: JSON.stringify(partOrders)
    };

    fetch(`/part_orders/${id}`, options)
      // our promise for fetch, instead of using "async", "wait", and "try"
      .then(response => response.json())
      //the response returned with actual data
      .then(partOrders => {
        // console.log('delete order', id)  //id not define
        // console.log('delete order',orders);
        // upon success, update tasks
        setPartOrders(partOrders);
        console.log('delete order', partOrders)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }

    //function to DELETE on Full Orders
    function deleteFullOrder(id) {
      //Method default is always GET, to change it, you need to
      //explicitly tell REACT to send DELETE request
      let options = {
        method: "DELETE", //We are removing an existing task from our list of tasks
        //method to convert the "task" key and "tasks" value JS
        //elements into JSON elements from the data entered in the body
        body: JSON.stringify(fullOrders)
      };
  
      fetch(`/full_orders/${id}`, options)
        // our promise for fetch, instead of using "async", "wait", and "try"
        .then(response => response.json())
        //the response returned with actual data
        .then(fullOrders => {
          console.log(fullOrders);
          // upon success, update tasks
          setFullOrders(fullOrders);
        })
        //catches error
        .catch(err => {
          // upon failure, show error message
          console.log("ERROR:", err.message);
        });
    }
  
  
    /******************************************************SEARCH BAR************************************************************* */

    //Search Bar Filter functions, searches through all columns
    function search (rows) {
      //Short way: extract keys of columns from first row
      const columns = rows[0] && Object.keys(rows[0]);
      //filter by column for each row
      return rows.filter( (row) =>
        //We use ".toLowerCase" in the row[column] and with "query" so it will search
        //through all data in lowercase without having to worry to case sensitivity
        columns.some( (column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
        //Will give error if use ".toLowerCase()" because not all columns are strings, some are integers
        //We solve this by adding ".toString()"
      );
    }

      //Long way
      // //Filter by row, and separate by "||" comparison operator
      // return rows.filter( (row) => 
      //   //Filter by Date
      //   row.ord_date.indexOf(query) >-1 ||
      //   //Filter by Vendor
      //   row.vendor.toLowerCase().indexOf(query) >-1 ||
      //   //Filter by Team
      //   row.team.toLowerCase().indexOf(query) >-1 ||
      //   //Filter by Item
      //   row.item.toLowerCase().indexOf(query) > -1 ||
      //   //Filter by Size
      //   row.size.toLowerCase().indexOf(query) > -1 
      // );
    // }


    
  /************************************************REDNER DISPLAY***************************************************************/
  return (
        <Router >
              {/* --->Here is where the Sidebar sits<--- */}
          <div className="App" id="outer-cointainer">
              <div className="SideBar">
                  <SideBar />
              </div>
                {/* --->This is where the Search Bar goes<--- */}
              <div className="body" id="wrapper">
                    <label htmlFor="search-bar" />
                    {/* The search bar goes here */}
                        <input type="text"
                            name="query"
                            placeholder="Search..."
                            id="search-bar"
                            value={ query }
                            onChange= {(e) => setQuery(e.target.value)}
                        />
                      {/* --->All page components are located here<--- */}
                    <Routes 
                        // Partial Orders/ PartOrders.js
                        addOrder={newOrder => addOrder(newOrder)}
                        searchPartOrders={search(partOrders)}
                        updatePartOrder={id => updatePartOrder(id)}
                        deletePartOrder={id => deletePartOrder(id)} //function must match here, onDelete is ONLY btwn only Routes and child
                        partOrders = {partOrders}
                        
                        //Full Orders/ FullOrders.js
                        fullOrders={fullOrders}
                        searchFullOrders={search(fullOrders)}
                        updateFullOrder={id => updateFullOrder(id)}
r                        deleteFullOrder={id => deleteFullOrder(id)}
                        
                        //Inventory/ Inventory.js
                        searchAllOrders={search(allOrders)}
                        allOrders={allOrders}

                    />
              </div>
          </div>   
        </Router>
  );
}






  /***********************LATER FEATURE****************** */

  // import GearDistr from './components/LaterFeats/Distr/GearDistr';
  // import AthleteCard from './components/UserComponents/Distr/AthleteCard'
  // import AthleteForm from './components/LaterFeats/Distr/AthleteForm'
  // import AthleteList from './components/LaterFeats/Distr/AthleteList'


  // //hook for collection of state objs from AthleteForm:
  // const [athletes, setAthletes] = useState([])

  // function addAthlete(newAthlete) {
  //   console.log('parent-newath', newAthlete)
  //   setAthletes((state) => [...state, newAthlete]);
  // }
  // console.log('parent-athletes', athletes) */





//  {/* Later Feature

//           <AthleteCard />
//           <AthleteForm onSubmit={(newAthlete) => addAthlete(newAthlete)} />
//           <AthleteList athletes={athletes} onSelectedAth={athelete => setAthletes(athelete)} />
//           <GearDistr />
//           */}

    //function to GET athletes
    //function to POST athletes
   //function to UPDATE athletes
   //function to DELETE athletes

   /************************************************************************************************************************************* */

  