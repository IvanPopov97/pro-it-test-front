import React from 'react'
import '../../componentStyles/Main-navigation.css'
import MainNavigationItem from './MainNavigationItem'
import CreateButton from "../CreateButton";

const MainNavigation = ({items, showCreateButton}) => {
    return (
        <nav className='Main-navigation'>
            <ul className='Breadcrumb'>
                {
                    items.filter(item => item.showInMainMenu)
                        .map(item => <MainNavigationItem key={item.id} item={item}/>)
                }
            </ul>
            {showCreateButton ? <CreateButton/> : null}
        </nav>
    )
}

export default MainNavigation