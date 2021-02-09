// this will be the dashboard view
import React, {useState, useEffect} from 'react'
//import ALL components for React Router SideBar Menu
import Table from './components/UserComponents/Recv/Table'
import OrdersForm from './components/UserComponents/Recv/OrdersForm'
import Inventory from './components/UserComponents/Inventory/Inventory'
import './App.css';


// This displays all the components, react-router to coordinate
export default function App() {

  //hook for collection of inventory from OrdersForm
  const [inventories, setInventories] = useState([]);

  //Test Function for Mock Display ONLY
  function addInventory(newInventory) {
      console.log('parent-newInv', newInventory)
      setInventories((state) => [...state, newInventory]);
    }
    console.log('parent-inventories', inventories) 



  /**************GET Data********************************** */
  
    //useEffect to GET data from DB

      //useEffect hook to tell react to fetch automatically and get data from server
  useEffect(() => {
    fetch("/api/rampup") //this connects to the server api.js
    //our request
    .then(response => response.json())
    //this is the response returned with data array
    .then(inventories => {
      console.log('parent', inventories)
      //upon success
      setInventories(inventories)
    })
    //catch error
    .catch(err => {
      //if error, show error
      console.log( "ERROR:", err.message);
    });
  }, []); //gets saved in an empty array
    

    //function to GET orders only if full order = NO


    //function to GET inventory, only if full order = YES



  /**************POST Data********************************** */


    


    //function to POST orders


    //function to POST inventory



  /**************UPDATE Data********************************** */


    


    //function to UPDATE orders


    //function to UPDATE inventory

    

  /**************DELETE Data********************************** */


    //function to DELETE orders


    //function to DELETE inventory


//render display
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <nav> 

          {/*Enter orders here */}
          <OrdersForm onSubmit={ newInventory => addInventory(newInventory)} />

            {/*This component displays all unreceived and partial entered from the form.
                Display only if Partial Order= YES or not selected
            */}
           <Table />
           
          {/*collection of all full received existing and new items, and displays all items 
              Display only if Full Order = YES
          */}
          <Inventory inventories={inventories} />
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