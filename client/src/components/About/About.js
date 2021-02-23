import React from 'react'

export default function About () {

    return( 
        <div className="About">
            <h2>About Page</h2>

            <div className="container1">
                <h3>What is RampUp '!' ?</h3>
            
                <p>A web app for athletic equipment managers in the collegiate division to track and manage inventory.</p>
            </div>  

            <div className="container2">
                <h3>Why is it needed?</h3>
                <ul>
                    <li>Built for equiment managers by an active equiment manager.</li>
                    <li>Separated partial and complete orders for accurate inventory.</li>
                    <li>Easy and fast search bar function for order lookup. </li>
                </ul>
            </div>

            <div className="container3">
                <h3>Features Included</h3>
                <ul>
                    <li>Search Bar for tables in DB</li>
                    <li>Sidebar with menu</li>
                    <li>New Order, and Edit Order Forms</li>
                    <li>Display data when selected</li>
                    <li>Edit pre-populated orders and Delete Order</li>
                    <li>User roles: Equipment Manager</li>
                </ul>
            </div>
        </div>
    )
}