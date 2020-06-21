import {NavLink} from "react-router-dom";
import React from "react";

const PaginationItem = ({path, link, text}) => {
    return link === 1
        ? <li><NavLink exact to={path}>{text}</NavLink></li>
        : <li><NavLink to={`${path}/${link}`}>{text}</NavLink></li>
}

export default PaginationItem;