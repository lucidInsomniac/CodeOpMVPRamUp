//Sidebar data rendering: Title, icon, and link
//Link to Material UI Icon: https://material-ui.com/components/material-icons/
import React from 'react'
// //Icon for Menu
import MenuIcon from '@material-ui/icons/Menu';
//Icon for home
import HomeIcon from '@material-ui/icons/Home';
//Icon for About
import InfoIcon from '@material-ui/icons/Info';
//Icon for Inventory
import ListAltIcon from '@material-ui/icons/ListAlt';
//Icon for Partial Orders
import TocIcon from '@material-ui/icons/Toc';
//Icon for Full Orders
import ViewListIcon from '@material-ui/icons/ViewList';
//Icon for Orders Input
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
//Icon for settings
import SettingsIcon from '@material-ui/icons/Settings';

//We only need to export a component that contains an array
//of objects instead of a function
// install in CLIENT folder with command: yarn add @material-ui/core
// and install CLIENT folder: yarn add @material-ui/icons
export const SidebarData = [

    {   //Dashboard view
        title: "Menu",
        path: "#",
        icon: <MenuIcon />
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
    {   //Orders Input
        title: "Orders Input",
        path: "/orders_input",
        icon: <LocalShippingIcon />  
    },
    {   //Partial Orders
        title: "Partial Orders",
        path: "/part_orders",
        icon: <TocIcon />
    },
    {   //Full Orders
        title: "Full Orders",
        path: "/full_orders",
        icon: <ViewListIcon/>,
    },
    {   //Inventory
        title: "Inventory",
        path: "/inventory",
        icon: <ListAltIcon />
    },
    {
        //Settings 
        title: "Settings",
        path: "#",
        icon: <SettingsIcon />
    }
    
]