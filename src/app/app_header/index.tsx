import { API_URL } from '@api'
import React from 'react'
import { DesktopNavbar } from './navbar/desktop'

interface props {}

export const AppHeader: React.FunctionComponent<props> = ({}) => {
    return (
        <div>
            <DesktopNavbar />
        </div>
    )
}
