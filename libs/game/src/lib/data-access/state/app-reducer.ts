
import { Reducer } from 'react';
import { filterDifficulty, getMultipleChoiceResponses, getQuestionFromKey } from '../services/game.service';
import { AppAction, AppActionType, AppState, GameConfig, Question, QuizState } from "./app-context";

const appReducer: Reducer<AppState, AppAction> = (state, action) => {

    switch (action.type) {
        case AppActionType.Configure:
            return {
                ...state,
                gameConfig: {
                    ...getMergedGameConfig(state.gameConfig, action.payload)
                }
            };
        case AppActionType.QuizPoolLoaded:
            // console.log('action.payload=', action.payload);
            return {
                ...state,
                questionPool: [...action.payload],
                quiz: {
                    ...handleQuestionsLoaded(state, action.payload)
                }
            };
        case AppActionType.Play:
            return {
                ...state,
                quiz: {
                    ...playGame(state)
                }
            };
        case AppActionType.ResetQuizState:
            return {
                ...state,
                quiz: {
                    ...resetQuizResponses(state)
                }
            };
        case AppActionType.AnswerQuestion: {
            // const currentPrompt = state.quiz as unknown;
            const isAnswerCorrect = state.gameService.isAnswerCorrect(
                state.quiz,
                action.payload as string
            );
            return isAnswerCorrect ?
                { ...state, quiz: getNextQuestion(state) } :
                { ...state, quiz: markIncorrect(state, action.payload) };
        }
        case AppActionType.GameCompleted:
            return state;
        default:
          throw new Error(`Unrecognized action. action.type=${action.type}`);
    }
};

const playGame = (state: AppState): QuizState => {
    // questions already loaded, just setting the "remaining questions" for the start of the game
    let quizState = handleQuestionsLoaded(state, state.questionPool);
    quizState = getNextQuestion({
        ...state,
        quiz: quizState
    });
    return {
        ...quizState
    }
};

const handleQuestionsLoaded = (state: AppState, questionPool: Question[]): QuizState => {
    const questionPoolCopy = questionPool ? [...questionPool] : [];

    const gameQuestions = filterDifficulty(questionPoolCopy, state.gameConfig.difficulty);
    const remainingQuestions = [...gameQuestions];

    // console.log('handleQuestionsLoaded - gameQuestions.length=', gameQuestions.length);
    // console.log('handleQuestionsLoaded - selectedNumberOfMultipleChoiceOptions=', state.gameConfig.selectedNumberOfMultipleChoiceOptions);
    return {
        ...state.quiz,
        questions: [...gameQuestions],
        remainingQuestions
    };
}

const resetQuizResponses = (state: AppState): QuizState => {
    // console.log('resetQuizResponses - state.quiz.questions=', state.quiz.questions);
    const gameQuestions = filterDifficulty(state.questionPool, state.gameConfig.difficulty);
    const remainingQuestions = [...gameQuestions];

    return {
        ...state.quiz,
        questions: [...gameQuestions],
        currentIncorrectPile: [],
        currentIncorrectResponses: [],
        aggregateIncorrectPile: [],
        remainingQuestions
    };
}

const getNextQuestion = (state: AppState): QuizState => {
    console.log('app-reducer > getNextQuestion - aggregateIncorrectPile=', state.quiz.aggregateIncorrectPile);
    // console.log('getNextQuestion - state.quiz.remainingQuestions=', state.quiz.remainingQuestions);
    if (!state.quiz.questions?.length) {
        throw new Error('Attempt to get the next quiz question before questions have been loaded!! :(');
    }
    const newIndex = Math.floor(Math.random() * state.quiz.remainingQuestions.length);
    const nextQuestion = state.quiz.remainingQuestions.splice(newIndex, 1)[0];

    // console.log('getNextQuestion - selectedNumberOfMultipleChoiceOptions=', state.gameConfig.selectedNumberOfMultipleChoiceOptions);
    const multipleChoiceOptions: Question[] = nextQuestion ?
        getMultipleChoiceResponses(
            state.quiz.questions,
            nextQuestion,
            state.gameConfig.selectedNumberOfMultipleChoiceOptions
        ) : [];
    console.log('app-reducer > getNextQuestion - aggregateIncorrectPile=', state.quiz.aggregateIncorrectPile);
    return {
        ...state.quiz,
        remainingQuestions: state.quiz.remainingQuestions,
        quizItem: nextQuestion,
        currentIncorrectPile: [],
        currentIncorrectResponses: [],
        multipleChoiceOptions
    };
};

const markIncorrect = (state: AppState, answerKey: string): QuizState => {
    console.log('app-reducer > markIncorrect...');
    console.log('app-reducer > markIncorrect - quizItem=', state.quiz.quizItem);
    const wrongResponseObject = getQuestionFromKey(state.quiz.questions, answerKey);
    console.log('app-reducer > markIncorrect - wrongResponseObject=', wrongResponseObject);
    return {
        ...state.quiz,
        currentIncorrectPile: [...state.quiz.currentIncorrectPile, state.quiz.quizItem],
        currentIncorrectResponses: [...state.quiz.currentIncorrectResponses, wrongResponseObject],
        aggregateIncorrectPile: [...state.quiz.aggregateIncorrectPile, state.quiz.quizItem],
    };
}

const getMergedGameConfig = (gameConfig: GameConfig, payload: Partial<GameConfig>): GameConfig => {
    const newConfig = {
        ...gameConfig,
        ...payload
    };
    return newConfig;
};

export { appReducer };
