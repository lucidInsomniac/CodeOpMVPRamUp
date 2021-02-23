// this will be the dashboard view
import React from 'react'
import './SideBar.css'

//import const SidebarData 
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'


// This displays all the components, react-router to coordinate
export default function SideBar() {
   
    return (

        <nav className="navbar">
            <ul className="navbar-nav">
                    {/* Sidebar is an array, so we need to map it out to 
                    access each element*/}
                    { SidebarData.map((val, key) => {
                        //create each row here and include a key
                        return (
                    
                            //create as list item for SideBar
                            //insert div in betwen <li>
                            
                            
                            <li key={key} 
                                className="nav-item"
                                //When row selected, stays highlighted
                                id={window.location.pathname === val.path ? "active" : ""}
                                onClick={() => (
                                    window.location.pathname = val.path
                                )}
                            >   
                                {/* This is how we list the sidebar menu items */}
                                {/* Here goes the link to the component when clicked */}
                                <Link 
                                    className="nav-link"
                                    to ={val.path} exact>
                                    
                                    {/* Here goes the icon */}
                                    <div id="nav-icon">
                                        {val.icon}
                                    </div> 

                                    {/* Here goes the text to indicate the menu item, <span> 
                                    is used like <div> but for text */}
                                    <span id="line-title">
                                        {val.title}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
            </ul>
        </nav>
    )
}