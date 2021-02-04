// this will be the dashboard view

import React, {useState} from 'react'
//import ALL components for React Router SideBar Menu
// import OrdRecv from './components/UserComponents/Recv/OrdRecv'
// import OrderForm from './components/UserComponents/Recv/OrderForm'
// import Inventory from './components/UserComponents/Inventory/Inventory'
import GearDistr from './components/UserComponents/Distr/GearDistr';
// import AthleteCard from './components/UserComponents/Distr/AthleteCard'
import AthleteForm from './components/UserComponents/Distr/AthleteForm'
import AthleteList from './components/UserComponents/Distr/AthleteList'
import './App.css';

// This displays all the components, react-router to coordinate
export default function App() {

  //hook for collection of state objs from AthleteForm:
  const [athletes, setAthletes] = useState([])
  
  function addAthlete(newAthlete) {
    console.log('parent-newath', newAthlete)
    setAthletes((state) => [...state, newAthlete]);
  }
  console.log('parent-athletes', athletes)
  

  //hook for collection of state objs from OrderForm:


  /**************GET Data********************************** */
  
    //useEffect to GET data from DB


    //function to GET athletes


    //function to GET orders


    //function to GET inventory



  /**************POST Data********************************** */


    //function to POST athletes


    //function to POST orders


    //function to POST inventory



  /**************UPDATE Data********************************** */


    //function to UPDATE athletes


    //function to UPDATE orders


    //function to UPDATE inventory

    

  /**************DELETE Data********************************** */


    //function to DELETE athletes


    //function to DELETE orders


    //function to DELETE inventory


//render display
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <nav>
          {/* <OrdRecv />
          <OrderForm />
          <Inventory />
          <AthleteCard /> */}
          <AthleteForm onSubmit={(newAthlete) => addAthlete(newAthlete)} />
          <AthleteList athletes={athletes} onSelectedAth={athelete => setAthletes(athelete)} />
          <GearDistr />
      </nav>
    </div>
  );
}

