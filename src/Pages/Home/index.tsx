import React, { useContext } from 'react'

import { Button } from 'antd'
import { Storage } from '@lib/Helpers'
import { UserContext } from '@context/index'
import { useHistory } from 'react-router-dom'

export const Home: React.FunctionComponent = () => {
    const user = useContext(UserContext)
    const history = useHistory()
    return (
        <div className='fade-up'>
            <p>Welcome, {user?.username}</p>
            <Button
                onClick={() => {
                    Storage.remove(['user'])
                    history.push('/login')
                }}
            >
                Sign Out
            </Button>
        </div>
    )
}
