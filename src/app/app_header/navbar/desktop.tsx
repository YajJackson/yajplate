import { API_URL } from '@api'
import { APP_STRINGS } from '@lib/strings'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const DesktopNavbar = () => {
    const location = useLocation()

    return (
        <div>
            <div className='flex justify-between items-center'>
                <Link className='text-3xl font-bold mb-4' to='/'>
                    {APP_STRINGS.appName}
                </Link>

                {location.pathname != '/login' && (
                    <Link to='/login'>
                        <button
                            className='px-4 py-1 rounded border border-primary bg-primary text-white transition hover:bg-white hover:text-primary'
                            onClick={() => {}}
                        >
                            sign in
                        </button>
                    </Link>
                )}
            </div>

            <div className='text-sm text-gray-400'>
                <p>Using API_URL: {API_URL}</p>
            </div>
        </div>
    )
}
