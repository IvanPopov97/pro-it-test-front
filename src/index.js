import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {rootReducer} from './redux/reducers/rootReducer'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from "react-router-dom";
import thunk from "redux-thunk";

const commonStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={commonStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

serviceWorker.unregister()