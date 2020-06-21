import {NavLink} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const PaginationItem = ({link, text}) => {
    const path = useSelector(state => state.app.currentPath)
    return link === 1
        ? <li><NavLink exact to={path}>{text}</NavLink></li>
        : <li><NavLink to={`${path}/${link}`}>{text}</NavLink></li>
}

export default PaginationItem;