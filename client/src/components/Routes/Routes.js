import React from 'react'
//import route and switch 
import { Route, Switch } from 'react-router-dom'
//import all page components for Routes 
import Home from '../Home/Home'
import About from '../About/About'
import OrdersForm from '../OrderForm/OrdersForm'
import PartOrders from '../PartialOrders/PartOrders'
import FullOrders from '../FullOrders/FullOrders'
import Inventory from '../Inventory/Inventory'
import EditPartOrdForm from '../PartialOrders/EditPartOrdForm'
import EditFullOrdForm from '../FullOrders/EditFullOrdForm'



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
                <Route path="/add_order">
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
                
                {/* Edit Partial Orders here, they will send data back to allorders */}
                <Route path="/part_orders/edit/:id">
                    <EditPartOrdForm 
                        partOrders={props.partOrders} 
                        onUpdatePartOrder={partOrdId=> props.updatePartOrder(partOrdId)}
                    />
                </Route>
                
                {/* collection of all full received existing and new items, and displays all items
                  Display only if Full Order = YES */}
                <Route path="/full_orders" exact>
                    <FullOrders 
                        fullOrders={props.fullOrders} 
                        onDeleteFullOrder={id => props.deleteFullOrder(id)}
                        onGetFullOrdId={id => props.getFullOrdId(id)}
                    />
                </Route>
                  
                  {/* Edit Full Orders here, they will send data back to allorders */}
                <Route path="/full_orders/edit/:id">
                   <EditFullOrdForm 
                        fullOrders={props.fullOrders} 
                        onUpdateFullOrder={fullOrdId => props.updateFullOrder(fullOrdId)}
                        
                   /> 
                </Route>
        
                
                {/* Displays all orders, existing and new orders */}
                <Route path="/inventory">
                    <Inventory allOrders={props.allOrders} />
                </Route>
            </Switch>
    )
}