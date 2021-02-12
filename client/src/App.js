// this will be the dashboard view
import React, {useState, useEffect} from 'react'
//import ALL components for React Router SideBar Menu
import PartOrders from './components/PartOrders'
// import OrdersForm from './components/OrdersForm'
import FullOrders from './components/FullOrders'
import SideBar from './components/SideBar'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Inventory from './components/Inventory'




// This displays all the components, react-router to coordinate
export default function App() {

  //hook for collection of inventory from OrdersForm, saved as array
  const [orders, setOrders] = useState([]);
  //hook for collection completed orders, saved as array
  const [inventories, setInventories] = useState([]);
  //hook for all existing and new orders, saved as array
  const [allOrders, setAllOrders] = useState([]);
  //hook for search bar query function, saved as string
  const [ query, setQuery] = useState("")

  // //Test Function for Mock Display ONLY
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

//     //function to POST orders
//     function addOrder (order) {
//       //pass order from Form
//       let newOrder = { order: order };

//       //Method default is alway GET, need to explicitly tell REACT to send POST
//       let options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json" //Description of file type is a JSON format
//         },
//         //method to convert "order"key and "newOrder"value JS int JSON when iput from body
//         body: JSON.stringify(newOrder)
//       };

//       //Shows DB with new added entry
//       fetch("/receiving", options)
//        // our promise for fetch, instead of using "async", "wait", and "try"
//        .then(response => response.json())
//        //the response returned with actual data
//        .then(orders => {
//          console.log(orders);
//          // upon success, update tasks
//          setOrders(orders);
//        })
//        //catches error
//        .catch(err => {
//          // upon failure, show error message
//          console.log("ERROR:", err.message);
//        });

//     }

    //POST to inventory

  /**************UPDATE Data********************************** */

    //function to UPDATE orders


    //function to UPDATE inventory



  /**************DELETE Data********************************** */


    //function to DELETE inventory

  
  
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
    
        <div className="App">
          <h1>Dashboard</h1>
          <Router>
              <SideBar />
              <Switch>
                <Route path="/" />
              </Switch>
          </Router>
            <div className="searchBar">
              <label htmlFor="search-bar" />
              {/* The search bar goes here */}
                <input type="text"
                      name="query"
                      placeholder="Search..."
                      id="search-bar"
                      value={ query }
                      onChange= {(e) => setQuery(e.target.value)}
                />

            </div>
        
          <nav>
              <About />
              {/*Enter orders here */}
              {/* <OrdersForm onSubmit={ newOrder => addOrder(newOrder)} /> */}


                {/*This component displays all unreceived and partial entered from the form.
                    Display only if Partial Order= YES or not selected
                */}
                <PartOrders orders={search(orders)} />
          

              {/*collection of all full received existing and new items, and displays all items
                  Display only if Full Order = YES
              */}
              <FullOrders inventories={search(inventories)} />
              
              {/* Displays all existing and new orders */}
              <Inventory allOrders={search(allOrders)}/>
          </nav>
        </div>
   
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

  