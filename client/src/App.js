// this will be the dashboard view
import React, { useState, useEffect} from 'react' 
import SideBar from './components/SideBar'
import Routes from './components/Routes'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'




// // This displays all the components, react-router to coordinate
export default function App() {

  //hook for collection of inventory from OrdersForm, saved as array
  const [orders, setOrders] = useState([]);
  //hook for collection completed orders, saved as array
  const [inventories, setInventories] = useState([]);
  //hook for all existing and new orders, saved as array
  const [allOrders, setAllOrders] = useState([]);
  //hook for search bar query function, saved as string
  const [ query, setQuery] = useState("")

  //Test Function for Mock Display ONLY
  // function addOrder(newOrder) {
  //     console.log('parent-newOrd', newOrder)
  //     setOrders((state) => [...state, newOrder]);
  //   }
  //   console.log('parent-orders', orders)


/**************GET Data********************************** */

    //useEffect  to Get ALL existing and new orders
  useEffect(() => {
    //FETCH DONE
    fetch("/alldata") //this connects to the server api.js
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


  //useEffect  to Get INVENTORY ONLY IF FULL ORDER = NO
  useEffect(() => {
    //FETCH DONE
    fetch("/receiving") //this connects to the server api.js
      // our promise for fetch, instead of using "async", "wait", and "try"
      //This is the request
      .then(response => response.json())
      //this is the response returned with actual data
      .then(orders => {
        console.log(orders);
        // upon success, update tasks
        setOrders(orders);
        //check
        console.log( 'fetch', orders)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }, []); //gets saved in the state

  
  //useEffect  to Get INVENTORY ONLY IF FULL ORDER = YES
  useEffect(() => {
    //FETCH DONE
    fetch("/inventory") //this connects to the server api.js
      // our promise for fetch, instead of using "async", "wait", and "try"
      //This is the request
      .then(response => response.json())
      //this is the response returned with actual data
      .then(inventories => {
        console.log(inventories);
        // upon success, update tasks
        setInventories(inventories);
        //check
        console.log( 'fetch', inventories)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }, []); //gets saved in the state


  /*******************POST Data********************************** */

    //function to POST orders
    function addOrder (order) {
      //pass order from Form BUT WE NEED TO DEFINE IT FIRST!!
      let newOrder = {  //<==== ALWAYS CHECK HERE FIRST BEFORE POST!!
        ord_date: order.ord_date,
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

      //Shows DB with new added entry
      fetch("/alldata", options) // ==> Make sure to ref ALL orders
       // our promise for fetch, instead of using "async", "wait", and "try"
       .then(response => response.json())
       //the response returned with actual data
       .then(orders => {
        //  console.log(orders);
         // upon success, update tasks
         setOrders(orders);
         //check
         console.log("Parent-setOrders", orders)
       })
       //catches error
       .catch(err => {
         // upon failure, show error message
         console.log("ERROR:", err.message);
       });

    }

    //POST to inventory

  /**************UPDATE Data********************************** */

    //function to UPDATE orders
    function updateOrder(order) {
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
        body: JSON.stringify(orders )
      };
  
      fetch(`/receiving/${order.ord_id}`, options)
        // our promise for fetch, instead of using "async", "wait", and "try"
        .then(response => response.json())
        //the response returned with actual data
        .then(orders => {
          console.log(orders);
          // upon success, update tasks
          setOrders(orders);
        })
  
        //catches error
        .catch(err => {
          // upon failure, show error message
          console.log("ERROR:", err.message);
        });
    }
  

    //function to UPDATE inventory
    function updateInventory(id) {
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
        body: JSON.stringify(inventories)
      };
  
      fetch(`/allData/${id}`, options)
        // our promise for fetch, instead of using "async", "wait", and "try"
        .then(response => response.json())
        //the response returned with actual data
        .then(inventories => {
          console.log(inventories);
          // upon success, update tasks
          setInventories(inventories);
        })
  
        //catches error
        .catch(err => {
          // upon failure, show error message
          console.log("ERROR:", err.message);
        });
    }
  


  /**************DELETE Data********************************** */
  function deleteOrder(id) {
    //Method default is always GET, to change it, you need to
    //explicitly tell REACT to send DELETE request
    let options = {
      method: "DELETE", //We are removing an existing task from our list of tasks
      //method to convert the "task" key and "tasks" value JS
      //elements into JSON elements from the data entered in the body
      body: JSON.stringify(orders)
    };

    fetch(`/receiving/${id}`, options)
      // our promise for fetch, instead of using "async", "wait", and "try"
      .then(response => response.json())
      //the response returned with actual data
      .then(orders => {
        // console.log('delete order', id)  //id not define
        // console.log('delete order',orders);
        // upon success, update tasks
        setOrders(orders);
        console.log('delete order', orders)
      })
      //catches error
      .catch(err => {
        // upon failure, show error message
        console.log("ERROR:", err.message);
      });
  }

    //function to DELETE inventory
    function deleteInventory(id) {
      //Method default is always GET, to change it, you need to
      //explicitly tell REACT to send DELETE request
      let options = {
        method: "DELETE", //We are removing an existing task from our list of tasks
        //method to convert the "task" key and "tasks" value JS
        //elements into JSON elements from the data entered in the body
        body: JSON.stringify(inventories)
      };
  
      fetch(`/inventory/${id}`, options)
        // our promise for fetch, instead of using "async", "wait", and "try"
        .then(response => response.json())
        //the response returned with actual data
        .then(inventories => {
          console.log(inventories);
          // upon success, update tasks
          setInventories(inventories);
        })
        //catches error
        .catch(err => {
          // upon failure, show error message
          console.log("ERROR:", err.message);
        });
    }
  
  
    /********************************************************** */

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

  //render display
  return (
        <Router >
              {/* --->Here is where the Sidebar sits<--- */}
          <div className="App" id="outer-cointainer">
              <div className="SideBar">
                  <SideBar 
                      // orders={search(orders)}
                      // inventories={search(inventories)}
                      // allOrders={search(allOrders)}
                  />
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
                        addOrder={newOrder => addOrder(newOrder)}
                        searchOrders={search(orders)}
                        updateOrder={order => updateOrder(order)}
                        deleteOrder={id => deleteOrder(id)} //onDelete is btwn only Routes and PartORds
                        orders = {orders}

                        inventories={search(inventories)}
                        onUpdateInventory={id => updateInventory(id)}
                        onDeleteInventory={id => deleteInventory(id)}
                        allOrders={search(allOrders)}
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

  