import React from 'react'
//import route and switch 
import { Route, Switch } from 'react-router-dom'
//import all page components for Routes 
import Home from './Home'
import About from './About'
import OrdersForm from './OrdersForm'
import PartOrders from './PartOrders'
import FullOrders from './FullOrders'
import Inventory from './Inventory'


export default function Routes( props ) {

    return (
            // Allows you to switch paths when clicked
            <Switch>
                {/* Add Dashboard Home View */}
                <Route path="/home" exact>
                    <Home />
                </Route>
                
                {/* About Project */}
                <Route path="/about">
                    <About />
                </Route>

                {/* Enter orders here  */}
                <Route path="/orders_input">
                    <OrdersForm />
                </Route>

                {/* This component displays all unreceived and partial entered from the form.
                    Display only if Full Order = NO */}
                <Route path="/part_orders">
                    <PartOrders orders={props.orders} />
                </Route>
                
                {/* collection of all full received existing and new items, and displays all items
                  Display only if Full Order = YES */}
                <Route path="/full_orders">
                    <FullOrders inventories={props.inventories} />
                </Route>
                
                {/* Displays all existing and new orders */}
                <Route path="/inventory">
                    <Inventory allOrders={props.allOrders} />
                </Route>
            </Switch>
    )
}