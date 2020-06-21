import React from "react";
import MainNavigation from "./MainNavigation";
import {useSelector} from "react-redux";

const Header = () => {
    const currentPath = useSelector(state => state.app.currentPath)
    const items = useSelector(state => state.app.items)

    const item = items.find(item => item.link === currentPath)

    const showCreateButton = item ? item.showCreateButton : false

    return (
        <header>
            <MainNavigation items={items} showCreateButton={showCreateButton}/>
        </header>
    )
}

export default Header