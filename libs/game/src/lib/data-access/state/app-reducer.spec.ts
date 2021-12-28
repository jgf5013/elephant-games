import { diff } from "react-native-reanimated";
import { AppActionType, AppState, difficultyOptions, initialStateApp } from './app-context';
import { appReducer } from './app-reducer';

describe('appReducer', () => {
    test(AppActionType.GameCompleted, () => {
        //GameCompleted action currently has no effect on state
        const existingAppState = { ...initialStateApp };
        const action = {
            type: AppActionType.GameCompleted
        }
        const newAppState = appReducer(existingAppState, action);
        expect(newAppState).toEqual(existingAppState);
    });

    test(AppActionType.Configure, () => {
        //GameCompleted action currently has no effect on state
        const existingAppState: AppState = { 
            ...initialStateApp
        };
        expect(existingAppState.gameConfig.selectedNumberOfMultipleChoiceOptions).toEqual(4);
        expect(existingAppState.gameConfig.difficulty).toEqual(difficultyOptions[0]);
        const action = {
            type: AppActionType.Configure,
            payload: {
                selectedNumberOfMultipleChoiceOptions: 8,
                difficulty: difficultyOptions[difficultyOptions.length]
            }
        }
        const newAppState = appReducer(existingAppState, action);
        
        expect(newAppState.gameConfig.selectedNumberOfMultipleChoiceOptions).toEqual(8);
        expect(newAppState.gameConfig.difficulty).toEqual(difficultyOptions[difficultyOptions.length]);
    });
})
