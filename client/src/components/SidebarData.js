//Sidebar data rendering: Title, icon, and link
//Link to Material UI Icon: https://material-ui.com/components/material-icons/
import React from 'react'
//Icon for dashboard
import HomeIcon from '@material-ui/icons/Home';
//Icon for About
import InfoIcon from '@material-ui/icons/Info';
//Icon for Inventory
import ListAltIcon from '@material-ui/icons/ListAlt';
//Icon for Partial Orders
import TocIcon from '@material-ui/icons/Toc';
//Icon for Full Orders
import ViewListIcon from '@material-ui/icons/ViewList';
//Icon for Menu
import MenuIcon from '@material-ui/icons/Menu';
//Icon for Close
import CloseIcon from '@material-ui/icons/Close';



//We only need to export a component that contains an array
//of objects instead of a function
// install in CLIENT folder with command: yarn add @material-ui/core
// and install CLIENT folder: yarn add @material-ui/icons
export const SidebarData = [
    {   //Menu
        title: "",
        path: "#",
        icon: <MenuIcon />
    },
    {
        //Close menu
        title: "",
        path: "#",
        icon: <CloseIcon />
    },
    {   //Dashboard view
        title: "Home",
        path: "/home",
        icon: <HomeIcon />
    },
    {   //About
        title: "About",
        path: "/about",
        icon: <InfoIcon />
    },
    {   //Inventory
        title: "Inventory",
        path: "/inventory",
        icon: <ListAltIcon />
    },
    {   //Partial Orders
        title: "Partial Orders",
        path: "/part_orders",
        icon: <TocIcon />
        
    },
    {   //Full Orders
        title: "Full Orders",
        path: "/full_orders",
        icon: <ViewListIcon/>
        
    }
    
]