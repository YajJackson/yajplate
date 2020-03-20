import React, { useState } from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'

import { Storage } from '@lib/Helpers'
import { UserContext } from '@context/index'

interface props {
    Component: React.ComponentType
}
export const PrivateRoute: React.FunctionComponent<props> = ({ Component }) => {
    const [user] = useState(Storage.load('user'))
    const location = useLocation()
    return (
        <Route
            render={() =>
                user ? (
                    <UserContext.Provider value={user}>
                        <Component />
                    </UserContext.Provider>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}
