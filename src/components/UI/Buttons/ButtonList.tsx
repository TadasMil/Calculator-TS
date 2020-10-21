import React from 'react'
import { NumberProp } from '../../Interfaces/Number'
import { buttonsData } from '../../Data/Data'
import { Button } from './Button/Button'

interface ButtonProps {
    handleNumberInput: (number: NumberProp) => void;
}

export const ButtonList: React.FC<ButtonProps> = ({ handleNumberInput }) => {
    return (
        <div>
            {
                buttonsData.map((button: NumberProp) => {
                    return <Button key={button.id} buttonData={button} handleNumberInput={handleNumberInput} />
                })
            }
        </div>
    )
}
