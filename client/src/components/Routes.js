import React from 'react'
//import route and switch 
import { Route, Switch } from 'react-router-dom'
//import all page components
import FullOrders from './FullOrders'
import About from './About'
import Inventory from './Inventory'
import OrdersForm from './OrdersForm'
import PartOrders from './PartOrders'
import Home from './Home'

export default function Routes( props ) {

    return (

            <Switch>
                {/* Add Dashboard Home View */}
                <Route path="/home" exact>
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/orders_input">
                    <OrdersForm />
                </Route>

                <Route path="/part_orders">
                    <PartOrders orders={props.orders} />
                </Route>

                <Route path="/full_orders">
                    <FullOrders inventories={props.inventories} />
                </Route>

                <Route path="/inventory">
                    <Inventory allOrders={props.allOrders} />
                </Route>
            </Switch>
    )
}