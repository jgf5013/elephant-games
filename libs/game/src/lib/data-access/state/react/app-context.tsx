import React, { ReactNode, useEffect, useReducer, useContext } from 'react';
import { appReducer } from '../app-reducer';
import { fetchQuizQuestionPool, filterDifficulty } from '../../services/game.service';
import { createContext } from 'react';

import { AppAction, AppActionType, AppContextProviderOptions, AppState, initialStateApp, Question } from "../app-context";


/* Note: The defaultValue argument is only used when a component does not have a matching Provider above it in the
 * tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a
 * Provider value does not cause consuming components to use defaultValue. */
const AppContext = createContext<{state: AppState<any>, dispatch: any}>({
    state: initialStateApp,
    dispatch: () => null
});

const AppContextProvider = ({ gameState, children }: AppContextProviderOptions) => {
    const [state, dispatch] = useReducer<React.Reducer<AppState<unknown>, AppAction>>(appReducer, {
        ...initialStateApp,
        gameState: {
            ...gameState
        }
    });
    useEffect(() => {
        if (!state.questions?.length) {
            fetchQuizQuestionPool(gameState.game)
                .then((quizPool: Question[]) => {
                    console.log('AppContextProvider - quizPool=', quizPool);
                    console.log('AppContextProvider - gameState.difficulty =', gameState.difficulty);
                    const gameQuestions = filterDifficulty(quizPool, gameState.difficulty);
                    dispatch({type: AppActionType.QuizPoolLoaded, payload: gameQuestions});
            });
        }
    }, [state.questions]);

    return (
        <AppContext.Provider
            value={{state, dispatch}}>
            {children}
        </AppContext.Provider>);
};

export { AppContext, AppContextProvider }