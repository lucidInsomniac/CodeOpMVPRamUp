// this will be the dashboard view
import React from 'react'
import './SideBar.css'

//import const SidebarData 
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'
// //Icon for Menu
import MenuIcon from '@material-ui/icons/Menu';
// //Icon for Close
import CloseIcon from '@material-ui/icons/Close';



// This displays all the components, react-router to coordinate
export default function SideBar() {
   
    return (

        <div className="SideBar">
            <ul className="SidebarList">
            {/*Cool feature of <Link> has ability to know when active */}
                <Link to ="#" 
                      className="menu-bar-icon"
                >
                    <MenuIcon />
                </Link>

                <Link to ="#" 
                      className="close-icon"
                >
                    <CloseIcon />
                </Link> 

                    {/* Sidebar is an array, so we need to map it out to 
                    access each element*/}
                    { SidebarData.map((val, key) => {
                        //create each row here and include a key
                        return (
                    
                            //create as list item for SideBar
                            //insert div in betwen <li>
                            
                            
                            <li key={key} 
                                className="row"
                                //When row selected, stays highlighted
                                id={window.location.pathname == val.path ? "active" : ""}
                                onClick={() => (
                                window.location.pathname = val.path
                                )}
                            >
                                <Link 
                                    className="row"
                                    to ={val.path} exact>

                                    <div id="icon">
                                        {val.icon}
                                    </div> 

                                    <div id="title">
                                        {val.title}
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                
            </ul>

        </div>
    )

}