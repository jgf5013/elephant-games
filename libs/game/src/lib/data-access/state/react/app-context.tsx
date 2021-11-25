import React, { ReactNode, useEffect, useReducer, useContext } from 'react';
import { appReducer } from '../app-reducer';
import { fetchQuizQuestionPool } from '../../services/game.service';
import { createContext } from 'react';

import { AppAction, AppActionType, AppContextProviderOptions, AppState, initialStateApp } from "../app-context";


/* Note: The defaultValue argument is only used when a component does not have a matching Provider above it in the
 * tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a
 * Provider value does not cause consuming components to use defaultValue. */
export const AppContext = createContext<{state: AppState<unknown>, dispatch: any}>({
    state: initialStateApp,
    dispatch: () => null
});

export function useCustomContext() {
  return useContext(AppContext);
}

export const AppContextProvider = ({ gameConfig, children }: AppContextProviderOptions) => {
    const [state, dispatch] = useReducer<React.Reducer<AppState<unknown>, AppAction>>(appReducer, {
        gameConfig,
        ...initialStateApp
    });
    useEffect(() => {
        if (!state.questions?.length) {
            fetchQuizQuestionPool(gameConfig.game)
                .then((quizPool: any[]) => {
                    dispatch({type: AppActionType.QuizPoolLoaded, payload: quizPool});
            });
        }
    }, [state.questions]);

    return (
        <AppContext.Provider
            value={{state, dispatch}}>
            {children}
        </AppContext.Provider>);
};