import React from "react";
import MainNavigation from "./MainNavigation";
import {useSelector} from "react-redux";

const Header = () => {
    const showCreateButton = useSelector(state => state.header.showCreateButton)
    const items = useSelector(state => state.app.items)
    return (
        <header>
            <MainNavigation items={items} showCreateButton={showCreateButton}/>
        </header>
    )
}

export default Header