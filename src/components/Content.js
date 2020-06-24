import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {setCurrentPath} from "../redux/actions/appActions";
import ActionDispatcher from "./HOC/ActionDispatcher";

const Content = () => {
    const items = useSelector(state => state.app.items)
    const mainItemId = useSelector(state => state.app.mainItemId)
    const mainLink = items.find(item => item.id === mainItemId).link
    return (
        <Switch>
            {
                items.map(
                    item => {
                        const action = () => setCurrentPath(item.link)
                        const render = () => <ActionDispatcher action={action} Component={item.component}/>
                        return <Route key={item.id} path={item.link} render={render}/>
                    }
                )
            }
            {
                mainLink ? <Redirect to={mainLink}/> : null
            }
        </Switch>
    )
}


export default Content