import React from 'react'
import { numbersData } from '../../../Data/Data'
import { IButton } from '../../../Interfaces/IButton'
import { Button } from '../../Buttons/Button/Button'
import classes from './NumberButtons.module.scss'

interface NumberButtonsProps {
    handleNumberInput: (buttonData: IButton) => void;
    styling: any;
}

export const NumberButtons: React.FC<NumberButtonsProps> = ({ handleNumberInput, styling }) => {
    return (
        <div className={styling}>
            {
                numbersData.map((button: IButton) => {
                    return <Button
                        key={button.id}
                        buttonData={button}
                        handleButtonInput={handleNumberInput}
                        buttonStyling={classes.Button} />
                })
            }
        </div>
    )
}
