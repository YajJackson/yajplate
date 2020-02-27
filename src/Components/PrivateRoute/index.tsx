import { Redirect, Route } from 'react-router-dom'

import React from 'react'

interface props {
    Component: React.ComponentType
    path: string
}
export const PrivateRoute: React.FunctionComponent<props> = ({ Component, path }) => {
    return (
        <Route
            render={props =>
                true ? (
                    <Redirect
                        exact
                        from='/'
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />
                ) : (
                    <Component />
                )
            }
        />
    )
}
