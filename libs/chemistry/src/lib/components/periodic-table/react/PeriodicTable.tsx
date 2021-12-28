import { useContext } from 'react';
import { AppContext } from '@elephant-games/game';
import { Element, ElementQuestion } from '../../../models/index';
import { AtomicElement } from '../../atomic-element/react/AtomicElement';
import { elementListToElementMatrix } from '../../../data-access/periodic-table.service.tsx';
import './PeriodicTable.module.scss';



const PeriodicTable = () => {
    const { state } = useContext(AppContext);
    const { quiz } = state;
    const elementsMatrix = quiz.questions ? elementListToElementMatrix(quiz.questions as ElementQuestion[]) : [];
    console.log('elementsMatrix[0]=', elementsMatrix[0]);
    const tableOfElements = elementsMatrix.map((atomicElementProps: ({ atomicElement?: Element; } | undefined), index: number) => {
        return (<AtomicElement key={"table-element-" + index} atomicElement={atomicElementProps?.atomicElement} />);
    });
    return (
        <div className="periodic-table">
            {tableOfElements}
        </div>
    );
};


export { PeriodicTable };