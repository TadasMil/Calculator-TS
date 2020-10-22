import React, { useState } from 'react';
import { IButton } from '../components/Interfaces/IButton';
import { ButtonList } from '../components/UI/Buttons/ButtonList';
import classes from './Calculator.module.scss';

export const Calculator: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<IButton | null>(null);
    const [secondNumber, setSecondNumber] = useState<IButton | null>(null);

    const handleSubmitNumber = (buttonData: IButton): void => {
        console.log(buttonData)
        firstNumber ? setSecondNumber(buttonData) : setFirstNumber(buttonData);
    }

    const handleSelectedOperator = (operator: IButton): void => {
        console.log(operator);
    }

    return (
        <div className={classes.Background}>
            <ButtonList
                handleNumberInput={handleSubmitNumber}
                handleSelectedOperator={handleSelectedOperator}>
            </ButtonList>
        </div>
    )
}
