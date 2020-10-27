import React from 'react'
import { IButton } from '../../Interfaces/IButton';

interface InputFieldProps {
    inputNumber: number | string;
    handleOnInputChange: (e: any) => void;
}

export const InputField: React.FC<InputFieldProps> = ({ inputNumber, handleOnInputChange }) => {
    return (
        <input type="text" name="number" value={inputNumber} placeholder="0" onChange={handleOnInputChange}></input>
    );
}
