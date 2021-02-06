// this will be the dashboard view
import React, {useState} from 'react'
//import ALL components for React Router SideBar Menu
import Recv from './components/UserComponents/Recv/Recv'
import OrdersForm from './components/UserComponents/Recv/OrdersForm'
import Inventory from './components/UserComponents/Inventory/Inventory'

import './App.css';

// This displays all the components, react-router to coordinate
export default function App() {


  /**************GET Data********************************** */
  
    //useEffect to GET data from DB


    

    //function to GET orders


    //function to GET inventory



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
          <OrdersForm />

            {/*This component displays all unreceived and partial entered from the form.
                Display only if Partial Order= YES or not selected
            */}
           <Recv />
           
          {/*collection of all full received existing and new items, and displays all items 
              Display only if Full Order = YES
          */}
          <Inventory />
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
  

  //hook for collection of state objs from OrderForm:


 {/* Later Feature

          <AthleteCard /> 
          <AthleteForm onSubmit={(newAthlete) => addAthlete(newAthlete)} />
          <AthleteList athletes={athletes} onSelectedAth={athelete => setAthletes(athelete)} />
          <GearDistr /> 
          */}

    //function to GET athletes
    //function to POST athletes
   //function to UPDATE athletes
   //function to DELETE athletes