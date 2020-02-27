import { Redirect, Route } from 'react-router-dom'

import React from 'react'

interface props {
    Component: React.ComponentType
}
export const PrivateRoute: React.FunctionComponent<props> = ({ Component }) => {
    return (
        <Route
            render={props =>
                true ? (
                    <Redirect
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
