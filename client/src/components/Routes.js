import React from 'react'
//import route and switch 
import { Route, Switch } from 'react-router-dom'
//import all page components
// import OrdersForm from './components/OrdersForm'
import FullOrders from './components/FullOrders'
import SideBar from './components/SideBar'
import About from './components/About'
import Inventory from './components/Inventory'

export default function Routes( props ) {
    return (
        <Switch>
            <Route path="/" exact>
            </Route>

            <Route path="/about">
            </Route>

            <Route path="">
            </Route>
        </Switch>
    )
}