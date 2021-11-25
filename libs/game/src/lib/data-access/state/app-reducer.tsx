
import { Reducer } from 'react';
import { Element } from '@elephant-games/chemistry';
import { AppAction, AppActionType, AppState, Game, QuizState } from "./app-context";
import { isAnswerCorrect as isGameAnswerCorrect } from '../services/game.service';

export const appReducer: Reducer<AppState<unknown>, AppAction> = (state, action) => {
    switch (action.type) {
        case AppActionType.QuizPoolLoaded:
            return handleQuestionsLoaded(state, action);
        case AppActionType.AnswerQuestion:
            return isAnswerCorrect(state.gameConfig.game, state.quiz, action.payload) ?
                { ...state, quiz: getNextQuestion(state.quiz) } :
                { ...state, quiz: markIncorrect(state.quiz, action.payload) };
        default:
            throw new Error(`Unrecognized action. action.type=${action.type}`);
    }
};

const handleQuestionsLoaded = (state, action) => {

    const quizItems = action.payload;
    const initialQuestionIndex = Math.floor(Math.random() * quizItems.length);
    const initialQuizQuestion = quizItems.splice(initialQuestionIndex, 1)[0];
    return {
        ...state,
        questions: [...quizItems],
        // questions: action.payload,
        quiz: {
            ...state.quiz,
            remainingQuestions: [...quizItems],
            quizItem: initialQuizQuestion
        }
    };
}

const isAnswerCorrect = (game: Game, prompt: QuizState<unknown>, responseGiven: number) => {
    return isGameAnswerCorrect<Element>(game, prompt as QuizState<Element>, responseGiven);
};

const getNextQuestion = (prompt: QuizState<unknown>): QuizState<unknown> => {
    if (!prompt.remainingQuestions) {
        throw new Error('Attempt to get the next quiz question before questions have been loaded!! :(');
    }
    const initialQuestionIndex = Math.floor(Math.random() * prompt.remainingQuestions.length);
    const nextQuestion = prompt.remainingQuestions.splice(initialQuestionIndex, 1)[0];

    return {
        ...prompt,
        quizItem: nextQuestion,
        remainingQuestions: [...prompt.remainingQuestions],
        currentIncorrectPile: [],
        aggregateIncorrectPile: [...prompt.aggregateIncorrectPile, ...prompt.currentIncorrectPile]
    };
};



const markIncorrect = (prompt: QuizState<unknown>, atomicNumber: number): QuizState<unknown> => {
    return {
        ...prompt,
        currentIncorrectPile: [...prompt.currentIncorrectPile, atomicNumber]
    };
}