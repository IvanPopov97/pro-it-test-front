import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

const componentWithLink = (Component, link) => (
    () => <Component path={link}/>
)

const Content = ({items, mainItemId}) => {
    const mainLink = items.find(item => item.id === mainItemId).link
    return (
        <Switch>
            {
                items.map(
                    item => {
                        return <Route key={item.id}
                                      path={item.link}
                                      render={componentWithLink(item.component, item.link)}/>
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