import { useApi } from '@api'
import { USER_LOGIN_RESPONSE } from '@api/auth'
import { userSignIn } from '@store/system/actions'
import { AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

enum INPUT_OPTION {
    NONE,
    EMAIL,
    PASSWORD,
}

type Inputs = {
    email: string
    password: string
}

export const SignInForm = () => {
    const api = useApi()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [selectedInput, setSelectedInput] = useState(INPUT_OPTION.NONE)
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<Inputs>({ mode: 'onChange' })

    const loginUser: SubmitHandler<Inputs> = async (data) => {
        setLoading(true)
        const credentials = { ...data, identifier: data.email }
        const response = await api.auth.login(credentials)
        setLoading(false)
        if (response.type !== USER_LOGIN_RESPONSE) {
            return console.log('Handle login error.')
        }
        dispatch(userSignIn(response.user, response.jwt))
    }

    return (
        <form onSubmit={handleSubmit(loginUser)} className='flex flex-col space-y-6 w-full'>
            <AnimateSharedLayout>
                {/* Email */}
                <div>
                    <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
                        {selectedInput == INPUT_OPTION.EMAIL && (
                            <motion.div
                                layoutId='fun'
                                className='bg-primary h-8 w-1 absolute rounded-full'
                                initial={{ x: -20, y: 25 }}
                            />
                        )}
                        <div>Email</div>
                        <input
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            autoFocus
                            className='mt-1 shadow-sm transition focus:ring focus:ring-gray-300 focus:border-black focus:outline-none block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                            type='email'
                            placeholder='alex@example.com'
                            onFocus={() => setSelectedInput(INPUT_OPTION.EMAIL)}
                        />
                    </label>
                </div>

                {/* Password */}
                <div>
                    <label htmlFor='about' className='block text-sm font-medium text-gray-700'>
                        {selectedInput == INPUT_OPTION.PASSWORD && (
                            <motion.div
                                layoutId='fun'
                                className='bg-primary h-8 w-1 absolute rounded-full'
                                initial={{ x: -20, y: 25 }}
                            />
                        )}
                        <div>Password</div>
                        <input
                            {...register('password', { required: true, minLength: 6 })}
                            className='mt-1 shadow-sm transition focus:ring focus:ring-gray-300 focus:border-black focus:outline-none block w-full sm:text-sm border border-gray-300 rounded-md p-2'
                            type='password'
                            onFocus={() => setSelectedInput(INPUT_OPTION.PASSWORD)}
                        />
                    </label>
                </div>

                {isValid && (
                    <motion.button
                        type='submit'
                        className='text-white bg-primary hover:text-white md:opacity-95 md:hover:opacity-100 px-4 py-2 rounded-lg focus:outline-none float-left shadow-app w-full'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                    >
                        {loading ? <div>...</div> : <div>Continue</div>}
                    </motion.button>
                )}
            </AnimateSharedLayout>
        </form>
    )
}
