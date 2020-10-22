import React from 'react'
import { IButton } from '../../../Interfaces/IButton'
import { Button } from '../../Buttons/Button/Button'

interface OperatorButtonProps {
    handleSelectedOperator: (buttonData: IButton) => void;
    styling: any;
    buttonStyle: any;
    operatorButtonData: IButton[];
}

export const Operators: React.FC<OperatorButtonProps> = ({ handleSelectedOperator, styling, operatorButtonData, buttonStyle }) => {
    return (
        <div className={styling}>
            {
                operatorButtonData.map((operator: IButton) => {
                    return <Button
                        key={operator.id}
                        buttonData={operator}
                        handleButtonInput={handleSelectedOperator}
                        buttonStyling={buttonStyle} />
                })
            }
        </div>
    )
}
