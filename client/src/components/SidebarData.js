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


//We only need to export a component that contains an array
//of objects instead of a function
// install in CLIENT folder with command: yarn add @material-ui/core
// and install CLIENT folder: yarn add @material-ui/icons
export const SidebarData = [
    {   //Dashboard view
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {   //About
        title: "About",
        icon: <InfoIcon />,
        link: "/about"
    },
    {   //Inventory
        title: "Inventory",
        icon: <ListAltIcon />,
        link: "/inventory"
    },
    {   //Partial Orders
        title: "Partial Orders",
        icon: <TocIcon />,
        link: "/part_orders"
    },
    {   //Full Orders
        title: "Full Orders",
        icon: <ViewListIcon/>,
        link: "/full_orders"
    },
]