import './app.css'

import { Route, Switch } from 'react-router-dom'

import { PrivateRoute } from '@components/PrivateRoute'
import React from 'react'
import routes from 'routes'

export const App = () => {
    return (
        <div id='app'>
            <Switch>
                {routes.map(({ path, component }) =>
                    path === '/login' ? (
                        <Route key={path} path={path} component={component} />
                    ) : (
                        <PrivateRoute key={path} Component={component} />
                    )
                )}
            </Switch>
        </div>
    )
}
