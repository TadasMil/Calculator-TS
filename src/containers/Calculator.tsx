import React, { useState } from 'react';
import { IButton } from '../components/Interfaces/IButton';
import { ButtonList } from '../components/UI/Buttons/ButtonList';
import classes from './Calculator.module.scss';

type InputValue = number | string;

export const Calculator: React.FC = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [inputNumber, setInputNumber] = useState<InputValue>("");
    const [displayInput, setDisplay] = useState<string[]>([]);
    const [hasResult, setHasResult] = useState<boolean>(false);
    const [selectedOperator, setOperator] = useState<InputValue>("");

    const handleOnInputChange = (e: any): void => {
        setInputNumber(e.target.value);
    }

    const handleSubmitNumber = (buttonData: IButton): void => {
        if (hasResult) {
            setHasResult(false);
            return setInputNumber(buttonData.description.toString());
        }
        setInputNumber(inputNumber.toString() + buttonData.description.toString());
    }

    const handleSelectedOperator = (operator: IButton): void => {
        if (hasResult) {
            const arr = setUpcomingHistoryItems(operator.description.toString());
            setOperator(operator.type);
            return handleCalculationHistory(arr, hasResult);
        }
        setOperator(operator.type);
        handleCalculation(operator);
    }

    const handleCalculation = (operator: IButton) => {
        if (!firstNumber) {
            setFirstExpression(Number(inputNumber), operator.type.toString(), handleCalculationHistory);
            setOperator(operator.type);
            setInputNumber("");
        } else {
            const result = getResult(firstNumber, Number(inputNumber), selectedOperator);
            const getItems = setUpcomingHistoryItems(operator.description.toString(), inputNumber.toString());
            handleCalculationHistory(getItems, hasResult);
            setInputNumber(result);
            setFirstNumber(result);
            setHasResult(true);
        }
    }

    const setFirstExpression = (inputNumber: number, operator: string, callback: any): void => {
        const firstNum = inputNumber;
        setFirstNumber(firstNum);
        const val = setUpcomingHistoryItems(operator, inputNumber.toString());
        callback(val);
    }

    const setUpcomingHistoryItems = (operator: string, number?: string): string[] => {
        return number ? [number, operator] : [operator];
    }

    const handleCalculationHistory = (data: string[], hasResult: boolean): void => {
        if (hasResult) {
            const newHistoryArray = [...displayInput];
            newHistoryArray.pop();
            return setDisplay(state => {
                const newArr = [...state];
                newArr.pop();
                return [...newArr, ...data];
            });
        }
        const concatenatedHistory = displayInput.concat(data);
        setDisplay(state => [...state, ...data]);
    }

    const getResult = (firstNumber: number, secondNumber: number, operator: string | number): number => {
        switch (operator) {
            case "*":
                return firstNumber * secondNumber;
            case "/":
                return firstNumber / secondNumber;
            case "-":
                return firstNumber - secondNumber;
            case "+":
                return firstNumber + secondNumber;
            default:
                return 0;
        }
    }

    return (
        <div className={classes.Background}>
            <ButtonList
                displayInput={displayInput}
                inputNumber={inputNumber}
                handleOnInputChange={handleOnInputChange}
                handleNumberInput={handleSubmitNumber}
                handleSelectedOperator={handleSelectedOperator}>
            </ButtonList>
        </div>
    )
}
