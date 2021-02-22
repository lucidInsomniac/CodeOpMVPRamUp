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
import PartOrdEditForm from './PartOrdEditForm'



export default function Routes( props ) {

    return (
            // Allows you to switch paths when clicked
            <Switch>
                {/* Add Dashboard Home View */}
                <Route path="/home">
                    <Home />
                </Route>
                
                {/* About Project */}
                <Route path="/about" exact>
                    <About />
                </Route>

                {/* Enter orders here  */}
                <Route path="/orders_input">
                    <OrdersForm 
                        // This is passing data up but data is not being passed to ALL orders
                        onSubmit={(newOrder) => props.addOrder(newOrder)}
                    /> 


                </Route>

                {/* This component displays all unreceived and partial entered from the form.
                    Display only if Full Order = NO */}
                <Route path="/part_orders" exact>
                    <PartOrders 
                        partOrders={props.partOrders} 
                        onGetPartOrdId={id => props.getPartOrdId(id)}
                        onDeletePartOrder={id => props.deletePartOrder(id)}
                    />
                </Route>

                <Route path="/part_orders/edit/:id">
                    <PartOrdEditForm 
                        partOrders={props.partOrders} 
                        onUpdateSubmit={id => props.updatePartOrder(id)}
                    />
                </Route>
                
                {/* collection of all full received existing and new items, and displays all items
                  Display only if Full Order = YES */}
                <Route path="/full_orders">
                    <FullOrders 
                        fullOrders={props.fullOrders} 
                        // onUpdateFullOrder={id => props.updateFullOrder(id)}
                        onDeleteFullOrder={id => props.deleteFullOrder(id)}
                    />
                </Route>
                
                {/* Displays all existing and new orders */}
                <Route path="/inventory">
                    <Inventory allOrders={props.allOrders} />
                </Route>
            </Switch>
    )
}