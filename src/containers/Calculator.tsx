import React, { useState } from 'react';
import { NumberProp } from '../components/Interfaces/Number'
import { ButtonList } from '../components/UI/Buttons/ButtonList';

export const Calculator: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<NumberProp | null>(null);
    const [secondNumber, setSecondNumber] = useState<NumberProp | null>(null);

    const handleSubmitNumber = (number: NumberProp): void => {
        firstNumber ? setSecondNumber(number) : setFirstNumber(number);
    }

    return (
        <div>
            <ButtonList handleNumberInput={handleSubmitNumber}></ButtonList>
        </div>
    )
}
