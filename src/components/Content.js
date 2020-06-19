import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

const Content = ({items, mainItemId}) => {
    const mainLink = items.find(item => item.id === mainItemId).link
    return (
        <Switch>
            {
                items.map(
                    item => {
                        const Component = item.component
                        return (
                            <Route key={item.id}
                                   path={item.link}
                                   render={() => <Component path={item.link}/>}/>
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