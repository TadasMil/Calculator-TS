import React from 'react'
import { NumberProp } from '../../../Interfaces/Number'

interface ButtonProps {
    handleNumberInput: (number: NumberProp) => void;
    buttonData: NumberProp
}

export const Button: React.FC<ButtonProps> = ({ handleNumberInput, buttonData }) => {
    const { number } = buttonData;
    return (
        <div>
            <button onClick={() => handleNumberInput(buttonData)}>{number}</button>
        </div>
    )
}
