import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Storage } from '@lib/Helpers'

export const Login: React.FunctionComponent = () => {
    const history = useHistory()
    const location = useLocation()
    const [username, setUsername] = useState('')

    return (
        <div>
            <p>Sign in</p>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    Storage.save('user', { username })
                    // @ts-ignore
                    history.push(location.state?.from?.pathname ?? '/')
                }}
            >
                <input
                    type='text'
                    name='username'
                    placeholder='user'
                    onChange={e => setUsername(e.target.value)}
                />
                <input type='submit' value='sign in' />
            </form>
        </div>
    )
}
