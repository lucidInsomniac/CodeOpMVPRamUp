import REACT from 'react'
import '../App.css'
//import const SidebarData 
import { SidebarData } from './SidebarData'

export default function SideBar () {

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