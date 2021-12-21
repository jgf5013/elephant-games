import { useContext } from 'react';
import { AppContext } from '@elephant-games/game';
import { Element } from '../../../models/index';
import { AtomicElement } from '../../atomic-element/react/AtomicElement';
import { elementListToElementMatrix } from '../../../data-access/periodic-table.service';
import './PeriodicTable.module.scss';



const PeriodicTable = () => {
    const { state } = useContext(AppContext);
    const { questions } = state;
    const elementsMatrix = questions ? elementListToElementMatrix(questions as Element[]) : [];
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