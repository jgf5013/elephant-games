import { ReactNode } from 'react';

type Game = "flags" | "periodic-table";
type Screen = "Home" | "Settings" | "Quiz" | "Completed";
type Difficulty = "easy" | "medium" | "hard";
type MultipleChoiceOptions = 2 | 4 | 8;

interface GameState {
    screen: Screen;
    game?: Game;
    multipleChoiceResponses: MultipleChoiceOptions;
    difficulty: Difficulty;
};

interface AppContextProviderOptions {
    gameState: GameState;
    children: ReactNode;
};

interface QuizState<E> {
    remainingQuestions?: E[];
    quizItem?: E;
    promptCategory: string;
    currentIncorrectPile: number[];
    aggregateIncorrectPile: number[];
};

interface AppState<E> {
    gameState: GameState;
    quiz: QuizState<E>;
    questions?: E[];
};

enum AppActionType {
    GameSelected = "[Game] Game Selected",
    Play = "[Game] Play Game",
    Configure = "[Game] Update Game Configuration",
    AnswerQuestion = '[Periodic Table] Answer Question',
    QuizPoolLoaded = '[PeriodicTable] Elements Loaded'
};

interface Question {
    key: string;
    difficulty: Difficulty;
};

interface AppAction {
    type: AppActionType,
    payload?: any
};

const initialStateQuizItem: QuizState<unknown> = {
    promptCategory: 'name',
    currentIncorrectPile: [],
    aggregateIncorrectPile: []
};

const initialStateApp: AppState<unknown> = {
    gameState: {
        screen: "Home",
        game: "flags",
        difficulty: "easy",
        multipleChoiceResponses: 4
    },
    questions: [],
    quiz: initialStateQuizItem
};

export type { Game, Screen, Question, MultipleChoiceOptions, Difficulty, GameState, AppContextProviderOptions, QuizState, AppState, AppAction };
export { AppActionType, initialStateQuizItem, initialStateApp };