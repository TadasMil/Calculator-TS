import React from 'react'
import { IButton } from '../../../Interfaces/IButton'

interface ButtonProps {
    handleButtonInput: (buttonData: IButton) => void;
    buttonData: IButton;
    buttonStyling: string;
}

export const Button: React.FC<ButtonProps> = ({ handleButtonInput, buttonData, buttonStyling }) => {
    const { type } = buttonData;
    return (
        <>
            <button className={buttonStyling} onClick={() => handleButtonInput(buttonData)}>{type}</button>
        </>
    )
}
