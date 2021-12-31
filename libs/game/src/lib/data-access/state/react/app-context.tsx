import React, { ReactNode, useEffect, useReducer, useContext } from 'react';
import { appReducer } from '../app-reducer';
import { createContext } from 'react';

import { AppAction, AppActionType, AppContextProviderOptions, AppState, initialStateApp, Question } from "../app-context";


/* Note: The defaultValue argument is only used when a component does not have a matching Provider above it in the
 * tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a
 * Provider value does not cause consuming components to use defaultValue. */
const AppContext = createContext<{state: AppState, dispatch: any}>({
    state: initialStateApp,
    dispatch: () => null
});

const AppContextProvider = ({ gameService, gameConfig, children }: AppContextProviderOptions) => {
    const [state, dispatch] = useReducer<React.Reducer<AppState, AppAction>>(appReducer, {
        ...initialStateApp,
        gameService,
        gameConfig: {
            ...gameConfig
        }
    });

    useEffect(() => {
        if (!state.quiz.questions?.length) {
            gameService.fetchQuestionPool()
                .then((quizPool: Question[]) => {
                    dispatch({type: AppActionType.QuizPoolLoaded, payload: quizPool});
            });
        }
    }, [state.quiz.questions]);

    return (
        <AppContext.Provider
            value={{state, dispatch}}>
            {children}
        </AppContext.Provider>);
};

export { AppContext, AppContextProvider }