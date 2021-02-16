// this will be the dashboard view
import React from 'react'
import './SideBar.css'

//import const SidebarData 
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'
// //Icon for Menu
// import MenuIcon from '@material-ui/icons/Menu';
// //Icon for Close
// import CloseIcon from '@material-ui/icons/Close';



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
                                <Link 
                                    className="nav-link"
                                    to ={val.path} exact>

                                    <div id="nav-icon">
                                        {val.icon}
                                    </div> 

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