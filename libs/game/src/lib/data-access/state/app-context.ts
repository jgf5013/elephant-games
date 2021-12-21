import { ReactNode } from 'react';

type Game = "flags" | "periodic-table";
type Screen = "home" | "settings" | "quiz" | "completed";

interface GameState {
    screen: Screen;
    game?: Game;
    multipleChoiceResponses: number;
};

interface AppContextProviderOptions {
    gameState: GameState,
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
    gameState: GameState,
    quiz: QuizState<E>,
    questions?: E[],
}

enum AppActionType {
    GameSelected = "[Game] Game Selected",
    Play = "[Game] Play Game",
    Configure = "[Game] Update Game Configuration",
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
    gameState: {
        screen: "home",
        multipleChoiceResponses: 4
    },
    questions: [],
    quiz: initialStateQuizItem
};

export type { Game, Screen, GameState, AppContextProviderOptions, QuizState, AppState, AppAction };
export { AppActionType, initialStateQuizItem, initialStateApp };