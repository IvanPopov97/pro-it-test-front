import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './redux/rootReducer'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const commonStore = createStore(rootReducer, composeWithDevTools())

ReactDOM.render(
    <Provider store={commonStore}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()