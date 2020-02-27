import React from 'react'

interface props {}

export const Protected: React.FunctionComponent<props> = props => {
    return (
        <div>
            <p>Protected page</p>
        </div>
    )
}
