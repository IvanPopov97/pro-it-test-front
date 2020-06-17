import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

const componentWithLink = (Component, link) => (
    () => <Component path={link}/>
)

const Content = ({items, mainItemId}) => (
    <Switch>
        {
            items.map (
                item => {
                    const exact = item.id === mainItemId
                    return <Route key={item.id}
                                  exact={exact}
                                  path={item.link}
                                  render={componentWithLink(item.component, item.link)}/>
                }
            )
        }
    </Switch>
)

const mapStateToProps = state => ({
    items: state.app.items,
    mainItemId: state.app.mainItemId
})

export default connect(mapStateToProps)(Content)