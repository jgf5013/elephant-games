import { AppActionType, AppContext } from '@elephant-games/game';
import { useContext } from 'react';
import './AtomicElement.module.scss';


export const AtomicElement = ({ atomicElement }) => {
    const { state, dispatch } = useContext(AppContext);
    const { quiz } = state;
    
    return (
        <div>
            {atomicElement
                ? <div className={`grid-item ${quiz.currentIncorrectPile.includes(atomicElement.number) ? 'incorrect' : ''}`} onClick={(e) => {
                    dispatch({ type: AppActionType.AnswerQuestion, payload: atomicElement.number });
                }}>
                    <div className="table-element">
                        <span>{atomicElement.number}</span>
                        <br />
                        <span className="symbol">{atomicElement.symbol}</span>
                    </div>
                </div>
                : <div className="table-filler">{/* intentionally empty to introduce gap */}</div>
            }
        </div>
    );
};