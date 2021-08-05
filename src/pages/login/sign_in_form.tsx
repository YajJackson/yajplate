import { useApi } from '@api'
import { User, USER_LOGIN_RESPONSE } from '@api/auth'
import { userSignIn } from '@store/system/actions'
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

export type ArtistAccountData = {
    user: User
    jwt: string
}

const INPUT_SELECTED = {
    NONE: 'none',
    EMAIL: 'email',
    PASSWORD: 'password',
}

export const SignInForm = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const data = useMemo(() => {
        if (errorMessage) setErrorMessage('')
        return { email, password }
    }, [email, password])
    const disableButton = useMemo(() => !(data.email && data.password), [data])
    const [selectedInput, setSelectedInput] = useState(INPUT_SELECTED.NONE)

    const loginUser = async () => {
        setLoading(true)
        const credentials = { ...data, identifier: data.email }
        const response = await api.auth.login(credentials)
        setLoading(false)
        if (response.type !== USER_LOGIN_RESPONSE) {
            return setErrorMessage(response.data[0].messages[0].message)
        }
        dispatch(userSignIn(response.user, response.jwt))
    }

    return (
        <div className='flex flex-col space-y-6 w-full'>
            <AnimateSharedLayout>
                {/* Email */}
                <div>
                    <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
                        {selectedInput == INPUT_SELECTED.EMAIL && (
                            <motion.div
                                layoutId='fun'
                                className='bg-primary h-8 w-1 fixed rounded-full'
                                initial={{ x: -20, y: 25 }}
                            />
                        )}
                        <div>
                            Email <span className='error-message'>{errorMessage}</span>
                        </div>
                        <input
                            autoFocus
                            className='mt-1 shadow-sm transition focus:ring focus:ring-gray-300 focus:border-black focus:outline-none block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                            type='email'
                            placeholder='johnsmith@example.com'
                            onChange={({ target }) => setEmail(target.value)}
                            onFocus={() => setSelectedInput(INPUT_SELECTED.EMAIL)}
                        />
                    </label>
                </div>

                {/* Password */}
                <div>
                    <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
                        {selectedInput == INPUT_SELECTED.PASSWORD && (
                            <motion.div
                                layoutId='fun'
                                className='bg-primary h-8 w-1 fixed rounded-full'
                                initial={{ x: -20, y: 25 }}
                            />
                        )}
                        <div>Password</div>
                        <input
                            className='mt-1 shadow-sm transition focus:ring focus:ring-gray-300 focus:border-black focus:outline-none block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                            type='password'
                            placeholder=''
                            onChange={({ target }) => setPassword(target.value)}
                            onFocus={() => setSelectedInput(INPUT_SELECTED.PASSWORD)}
                        />
                    </label>
                </div>

                {!disableButton && (
                    <div className='flex flex-col items-center'>
                        <motion.button
                            onClick={() => !disableButton && loginUser()}
                            key='continue-button'
                            className=' text-white bg-primary hover:text-white md:opacity-95 md:hover:opacity-100 px-4 py-2 rounded-lg focus:outline-none float-left shadow-app w-full'
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                        >
                            {loading ? <div>...</div> : <div>Continue</div>}
                        </motion.button>
                    </div>
                )}
            </AnimateSharedLayout>
        </div>
    )
}
