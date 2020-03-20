import React, { useContext } from 'react'

import { Storage } from '@lib/Helpers'
import { UserContext } from '@context/index'
import { useHistory } from 'react-router-dom'

export const Home: React.FunctionComponent = () => {
    const user = useContext(UserContext)
    const history = useHistory()
    return (
        <div>
            <p>Welcome, {user?.username}</p>
            <input
                type='button'
                value='sign out'
                onClick={() => {
                    Storage.remove(['user'])
                    history.push('/login')
                }}
            />
        </div>
    )
}
