import React from 'react'
import {useSelector} from 'react-redux'
import '../componentStyles/Main-navigation.css'
import MainNavigationItem from './MainNavigationItem'
import CreateButton from './CreateButton'

const MainNavigation = () => {

    const items = useSelector(state => state.app.items)

    return (
        <nav className='Main-navigation'>
            <ul className='Breadcrumb'>
                {
                    items.map(item => <MainNavigationItem key={item.id} item={item}/>)
                }
            </ul>
            <CreateButton/>
        </nav>
    )
}

export default MainNavigation