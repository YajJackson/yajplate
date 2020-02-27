import { Route, Switch } from 'react-router-dom'

import { Home } from '@pages/Home'
import { PrivateRoute } from '@components/PrivateRoute'
import React from 'react'
import routes from 'routes'

export const App = () => {
    console.log({ routes })
    return (
        <div>
            <Switch>
                {routes.map(({ path, component }) =>
                    path === '/login' ? (
                        <Route key={path} path={path} component={component} />
                    ) : (
                        <PrivateRoute key={path} path={path} Component={component} />
                    )
                )}
            </Switch>
        </div>
    )
}
