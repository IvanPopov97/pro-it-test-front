import React from "react";
import {NavLink} from "react-router-dom";

const MainNavigationItem = ({item}) => {

    return (
        <li><NavLink to={item.link}>{item.name}</NavLink></li>
    )
}


export default MainNavigationItem;