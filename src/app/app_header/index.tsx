import { API_URL } from '@api'
import React from 'react'

interface props {}

export const AppHeader: React.FunctionComponent<props> = ({}) => {
    return (
        <div className='text-sm text-gray-400'>
            <p>Using API_URL: {API_URL}</p>
        </div>
    )
}
