// this will be the dashboard view
import React, {useState, useEffect} from 'react'
//import ALL components for React Router SideBar Menu
import Table from './components/UserComponents/Recv/Table'
import OrdersForm from './components/UserComponents/Recv/OrdersForm'
import Inventory from './components/UserComponents/Inventory/Inventory'
import Test from './components/UserComponents/Test'
import './App.css';



// This displays all the components, react-router to coordinate
export default function App() {

  //hook for collection of inventory from OrdersForm
  const [orders, setOrders] = useState([]);
  // const [inventories, setInventories] = useState([]);


  // //Test Function for Mock Display ONLY
  // function addOrder(newOrder) {
  //     console.log('parent-newOrd', newOrder)
  //     setOrders((state) => [...state, newOrder]);
  //   }
  //   console.log('parent-orders', orders)



  /**************GET Data********************************** */

    //useEffect to GET all data from DB

      //useEffect hook to tell react to fetch automatically and get data from server
 useEffect(() => {
    //FETCH DONE
    fetch("/allData") //this connects to the server api.js
      // our promise for fetch, instead of using "async", "wait", and "try"
      //This is the request
      .then(response => response.json())
      //this is the response returned with actual data
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
  }, []); //gets saved in the state


  //   //function to GET Reciving only if full order = NO
  // //useEffect hook to tell react to fetch automatically and get data from server
  // useEffect(() => {
  //   fetch("/orders") //this connects to the server api.js
  //   //our request
  //   .then(response => response.json())
  //   //this is the response returned with data array
  //   .then(orders => {
  //     console.log('parent', orders)
  //     //upon success
  //     setOrders(orders)
  //   })
  //   //catch error
  //   .catch(err => {
  //     //if error, show error
  //     console.log( "ERROR:", err.message);
  //   });
  // }, []); //gets saved in an empty array


  // //function to GET Inventory, only if full order = YES
  // //useEffect hook to tell react to fetch automatically and get data from server
  // useEffect(() => {
  //   fetch("/inventory") //this connects to the server api.js
  //   //our request
  //   .then(response => response.json())
  //   //this is the response returned with data array
  //   .then(inventories => {
  //     console.log('parent', inventories)
  //     //upon success
  //     setInventories(inventories)
  //   })
  //   //catch error
  //   .catch(err => {
  //     //if error, show error
  //     console.log( "ERROR:", err.message);
  //   });
  // }, []); //gets saved in an empty array


  /**************POST Data********************************** */

    //function to POST orders
    function addOrder (order) {
      //pass order from Form
      let newOrder = { order: order };

      //Method default is alway GET, need to explicitly tell REACT to send POST
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json" //Description of file type is a JSON format
        },
        //method to convert "order"key and "newOrder"value JS int JSON when iput from body
        body: JSON.stringify(newOrder)
      };

      //Shows DB with new added entry
      fetch("/receiving", options)
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

    //POST to inventory

  /**************UPDATE Data********************************** */

    //function to UPDATE orders


    //function to UPDATE inventory



  /**************DELETE Data********************************** */


    //function to DELETE inventory

    /********************************************************** */

  //render display
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <nav>

          {/*Enter orders here */}
          <OrdersForm onSubmit={ newOrder => addOrder(newOrder)} />

          <Test orders={orders} />

            {/*This component displays all unreceived and partial entered from the form.
                Display only if Partial Order= YES or not selected
            */}
           <Table  />

          {/*collection of all full received existing and new items, and displays all items
              Display only if Full Order = YES
          */}
          <Inventory  />


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