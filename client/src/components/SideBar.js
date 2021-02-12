import React, {useState}from 'react'
import './SideBar.css'

//import const SidebarData 
import { SidebarData } from './SidebarData'
import { Link } from 'react-router-dom'


export default function SideBar () {

    const [sidebar, setSideBar] = useState(false)
    const showSideBar = () => setSideBar(!sidebar)

    return (

        <div className="SideBar">
            <ul className="SidebarList">
                {/* Sidebar is an array, so we need to map it out to 
            access each element*/}
            { SidebarData.map((val, key) => {
                //create each row here and include a key
                return (
                     //create as list item for SideBar
                    //insert div in betwen <li>
                    <li key={key} 
                        className="row"
                        //When row selected, 
                        onClick={() => (
                        window.location.pathname = val.link
                        )}
                    >
                        <div id="icon">
                            {val.icon}
                        </div> 

                        <div id="title">
                            {val.title}
                        </div>
                    </li>
                )
            })}
            </ul>
        </div>
    )

}