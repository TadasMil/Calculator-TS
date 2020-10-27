import React from 'react'

interface ResultProps {
    displayInput: string[]
}

export const History: React.FC<ResultProps> = ({ displayInput }) => {
    return (
        <h3>{displayInput}</h3>
    )
}
