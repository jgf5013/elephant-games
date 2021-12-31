import { baseGameService } from "../services/game.service";
import { AppActionType, AppState, difficultyOptions, initialStateApp, QuizState } from './app-context';
import { appReducer } from './app-reducer';
// just using geopolitical as a test example for mock data.

describe('appReducer', () => {

    const mockQuestionPool = [{
        "key": "china",
        "difficulty": 1
    }, {
        "key": "united-states-of-america",
        "difficulty": 1
    }, {
        "key": "canada",
        "difficulty": 2
    }, {
        "key": "india",
        "difficulty": 2
    }, {
        "key": "aland-islands",
        "difficulty": 8
    }];
    const easyQuestions = mockQuestionPool.filter(q => q.difficulty <= difficultyOptions[0].numericDifficulty)
    
    beforeEach(() => {

        const existingAppState: AppState = { 
            ...initialStateApp
        };
        const action = {
            type: AppActionType.Configure,
            payload: {
                ...initialStateApp.gameConfig
            }
        };
        const newAppState = appReducer(existingAppState, action);
        
        expect(newAppState.gameConfig.selectedNumberOfMultipleChoiceOptions).toEqual(4);
        expect(newAppState.gameConfig.difficulty).toEqual(difficultyOptions[0]);
    });
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
        const existingAppState: AppState = { 
            ...initialStateApp
        };
        expect(existingAppState.gameConfig.selectedNumberOfMultipleChoiceOptions).toEqual(4);
        expect(existingAppState.gameConfig.difficulty).toEqual(difficultyOptions[0]);
        const action = {
            type: AppActionType.Configure,
            payload: {
                selectedNumberOfMultipleChoiceOptions: 8,
                difficulty: difficultyOptions[difficultyOptions.length - 1]
            }
        }
        const newAppState = appReducer(existingAppState, action);
        
        expect(newAppState.gameConfig.selectedNumberOfMultipleChoiceOptions).toEqual(8);
        expect(newAppState.gameConfig.difficulty).toEqual(difficultyOptions[difficultyOptions.length -1]);
    });

    test(AppActionType.QuizPoolLoaded, () => {
        const existingAppState: AppState = { 
            ...initialStateApp
        };
        expect(existingAppState.gameConfig.selectedNumberOfMultipleChoiceOptions).toEqual(4);
        expect(existingAppState.gameConfig.difficulty).toEqual(difficultyOptions[0]);
        const action = {
            type: AppActionType.QuizPoolLoaded,
            payload: [...mockQuestionPool]
        }
        const newAppState = appReducer(existingAppState, action);
        
        expect(newAppState.questionPool.length).toEqual(mockQuestionPool.length);
        expect(newAppState.quiz.questions.length).toEqual(easyQuestions.length);
        expect(newAppState.quiz.remainingQuestions.length).toEqual(easyQuestions.length);
    });

    test(AppActionType.Play, () => {
        //GameCompleted action currently has no effect on state
        const existingAppState: AppState = { 
            ...initialStateApp,
            questionPool: [...mockQuestionPool],
            quiz: {
                ...initialStateApp.quiz,
                questions: [...mockQuestionPool]
            }
        };
        const action = {
            type: AppActionType.Play
        };
        const newAppState = appReducer(existingAppState, action);
        expect(newAppState.quiz.quizItem).toBeTruthy();
        expect(newAppState.quiz.remainingQuestions.length).toEqual(easyQuestions.length - 1);
    });

    test(AppActionType.ResetQuizState, () => {
        //GameCompleted action currently has no effect on state
        const existingAppState: AppState = { 
            ...initialStateApp,
            questionPool: [...mockQuestionPool],
            quiz: {
                ...initialStateApp.quiz,
                questions: [...mockQuestionPool],
                currentIncorrectPile: [ mockQuestionPool[0] ],
                currentIncorrectResponses: [ mockQuestionPool[1] ],
                aggregateIncorrectPile: [ mockQuestionPool[1], mockQuestionPool[2] ],
                remainingQuestions: easyQuestions.slice(1)
            }
        };
        const action = {
            type: AppActionType.ResetQuizState
        };
        const newAppState = appReducer(existingAppState, action);
        expect(newAppState.questionPool.length).toEqual(mockQuestionPool.length);
        expect(newAppState.quiz.questions.length).toEqual(easyQuestions.length);
        expect(newAppState.quiz.currentIncorrectPile.length).toEqual(0);
        expect(newAppState.quiz.currentIncorrectResponses.length).toEqual(0);
        expect(newAppState.quiz.aggregateIncorrectPile.length).toEqual(0);
        expect(newAppState.quiz.remainingQuestions.length).toEqual(easyQuestions.length);
    });

    test(AppActionType.AnswerQuestion, () => {
        //GameCompleted action currently has no effect on state
        const existingAppState: AppState = { 
            ...initialStateApp,
            questionPool: [...mockQuestionPool],
            quiz: {
                ...initialStateApp.quiz,
                questions: [...mockQuestionPool],
                currentIncorrectPile: [],
                currentIncorrectResponses: [],
                aggregateIncorrectPile: [],
                remainingQuestions: [...easyQuestions]
            },
            gameService: {
                ...baseGameService,
                fetchQuestionPool: () => Promise.resolve([...easyQuestions]),
                isAnswerCorrect: (currentPrompt: QuizState, response: string) => false, // just a mock
                getGamePrompt: (options) => <>Test</>
            }
        };
        const action = {
            type: AppActionType.AnswerQuestion,
            payload: easyQuestions[0].key
        };
        
        const appStateAfterWrong = appReducer({
            ...existingAppState,
            gameService: {
                ...existingAppState.gameService,
                isAnswerCorrect: (currentPrompt: QuizState, response: string) => false, // just a mock
            }
        }, action);
        expect(appStateAfterWrong.quiz.currentIncorrectPile.length).toEqual(1);
        expect(appStateAfterWrong.quiz.currentIncorrectResponses.length).toEqual(1);
        expect(appStateAfterWrong.quiz.aggregateIncorrectPile.length).toEqual(1);
        expect(appStateAfterWrong.quiz.remainingQuestions.length).toEqual(easyQuestions.length);
        const appStateAfterCorrect = appReducer({
            ...appStateAfterWrong,
            gameService: {
                ...existingAppState.gameService,
                isAnswerCorrect: (currentPrompt: QuizState, response: string) => true, // just a mock
            }
        }, action);
        expect(appStateAfterCorrect.quiz.remainingQuestions.length).toEqual(easyQuestions.length - 1);
        expect(appStateAfterCorrect.quiz.currentIncorrectPile.length).toEqual(0);
        expect(appStateAfterCorrect.quiz.currentIncorrectResponses.length).toEqual(0);
        expect(appStateAfterCorrect.quiz.aggregateIncorrectPile.length).toEqual(1);
    });
})
