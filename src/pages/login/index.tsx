import { APP_STRINGS } from '@lib/strings'
import React, { useState } from 'react'
import { SignInForm } from './sign_in_form'
import { SignUpForm } from './sign_up_form'

enum FORM {
    SIGN_IN,
    SIGN_UP,
}

export const LoginPage = () => {
    const [selectedForm, setSelectedForm] = useState(FORM.SIGN_IN)

    return (
        <div className='mx-auto w-full md:w-1/2 lg:w-2/5 mt-28 p-4 space-y-6'>
            <p className='text-5xl font-bold mb-4'>Welcome to {APP_STRINGS.appName}</p>
            {selectedForm == FORM.SIGN_IN ? <SignInForm /> : <SignUpForm />}
            {selectedForm == FORM.SIGN_IN ? (
                <div className='flex text-sm text-gray-400 items-center justify-center gap-2'>
                    <p>Need an account?</p>{' '}
                    <button
                        className='px-2 py-1 rounded border border-primary text-primary'
                        onClick={() => setSelectedForm(FORM.SIGN_UP)}
                    >
                        sign up
                    </button>
                </div>
            ) : (
                <div className='flex text-sm text-gray-400 items-center justify-center gap-2'>
                    <p>Already have an account?</p>{' '}
                    <button
                        className='px-2 py-1 rounded border border-primary text-primary'
                        onClick={() => setSelectedForm(FORM.SIGN_IN)}
                    >
                        sign in
                    </button>
                </div>
            )}
        </div>
    )
}
