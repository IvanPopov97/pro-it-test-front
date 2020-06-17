import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const MainNavigationItem = ({item}) => {

    const mainItemId = useSelector(state => state.app.mainItemId)
    const exact = item.id === mainItemId

    return (
        <li><NavLink exact={exact} to={item.link}>{item.name}</NavLink></li>
    )
}


export default MainNavigationItem;