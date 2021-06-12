import './assets/fonts/index.less'
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom'

import { App } from 'app'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import store from 'store/index'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
