import React from 'react'
import { IButton } from '../../Interfaces/IButton'
import { Operators } from '../ButtonTypes/Operators/Operators'
import { NumberButtons } from '../ButtonTypes/NumberButtons/NumberButtons'
import { multiOperators, singleOperators } from '../../Data/Data'
import classes from './ButtonList.module.scss'
import { InputField } from '../Input/InputField'
import { History } from '../Result/History'

type InputValue = number | string;

interface ButtonProps {
    inputNumber: InputValue;
    displayInput: string[];
    handleNumberInput: (buttonData: IButton) => void;
    handleSelectedOperator: (operator: IButton) => void;
    handleOnInputChange: (e: any) => void;
}
export const ButtonList: React.FC<ButtonProps> = ({ inputNumber, displayInput, handleNumberInput, handleSelectedOperator, handleOnInputChange }) => {
    return (
        <div className={classes.Calculator}>
            <History displayInput={displayInput} />
            <InputField inputNumber={inputNumber} handleOnInputChange={handleOnInputChange} />
            <div className={classes.CalculatorButtons}>
                <div className={classes.CalculatorMultiNumber}>
                    <Operators
                        handleSelectedOperator={handleSelectedOperator}
                        styling={classes.ButtonWrapList}
                        buttonStyle={classes.Button}
                        operatorButtonData={multiOperators} />
                    <NumberButtons handleNumberInput={handleNumberInput} styling={classes.ButtonWrapList} />
                </div>
                <Operators
                    handleSelectedOperator={handleSelectedOperator}
                    styling={classes.OperatorList}
                    buttonStyle={classes.ButtonSingle}
                    operatorButtonData={singleOperators} />
            </div>
        </div>
    )
}
