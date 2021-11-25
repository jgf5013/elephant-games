import { ReactNode } from 'react';

type Game = "flags" | "periodic-table";

interface GameConfig {
    game: Game;
    multipleChoiceResponses: number;
};

interface AppContextProviderOptions {
    gameConfig: GameConfig,
    children: ReactNode
};

interface QuizState<E> {
    remainingQuestions?: E[];
    quizItem?: E;
    promptCategory: string;
    currentIncorrectPile: number[],
    aggregateIncorrectPile: number[]
}

interface AppState<E> {
    gameConfig?: GameConfig,
    quiz: QuizState<E>,
    questions?: E[]
}

enum AppActionType {
    AnswerQuestion = '[Periodic Table] Answer Question',
    QuizPoolLoaded = '[PeriodicTable] Elements Loaded'
}

interface AppAction {
    type: AppActionType,
    payload?: any
}

const initialStateQuizItem: QuizState<unknown> = {
    promptCategory: 'name',
    currentIncorrectPile: [],
    aggregateIncorrectPile: []
};

const initialStateApp: AppState<unknown> = {
    questions: [],
    quiz: initialStateQuizItem
};

export type { Game, GameConfig, AppContextProviderOptions, QuizState, AppState, AppAction };
export { AppActionType, initialStateQuizItem, initialStateApp };