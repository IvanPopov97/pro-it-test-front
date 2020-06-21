import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {setCurrentPath} from "../redux/actions/appActions";
import ActionDispatcher from "./ActionDispatcher";

const Content = ({items, mainItemId}) => {
    const mainLink = items.find(item => item.id === mainItemId).link
    return (
        <Switch>
            {
                items.map(
                    item => {
                        const action = () => setCurrentPath(item.link)
                        const render = () => <ActionDispatcher action={action}
                                                               Component={item.component}/>
                        return (
                                <Route key={item.id}
                                       path={item.link}
                                       render={render}/>
                            )
                    }
                )
            }
            {
                mainLink ? <Redirect to={mainLink}/> : null
            }
        </Switch>
    )
}

const mapStateToProps = state => ({
    items: state.app.items,
    mainItemId: state.app.mainItemId
})

export default connect(mapStateToProps)(Content)