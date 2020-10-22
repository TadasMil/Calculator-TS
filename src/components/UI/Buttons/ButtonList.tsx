import React from 'react'
import { IButton } from '../../Interfaces/IButton'
import { Operators } from '../ButtonTypes/Operators/Operators'
import { NumberButtons } from '../ButtonTypes/NumberButtons/NumberButtons'
import { multiOperators, singleOperators } from '../../Data/Data'
import classes from './ButtonList.module.scss'

interface ButtonProps {
    handleNumberInput: (buttonData: IButton) => void;
    handleSelectedOperator: (operator: IButton) => void;
}

export const ButtonList: React.FC<ButtonProps> = ({ handleNumberInput, handleSelectedOperator }) => {
    return (
        <div className={classes.Calculator}>
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
    )
}
