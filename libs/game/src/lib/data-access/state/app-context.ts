import { ReactNode } from 'react';

type Game = "flags" | "periodic-table";
type Screen = "Home" | "Settings" | "Quiz" | "Completed";
type NumberOfMultipleChoiceOptions = 2 | 4 | 8;
const difficultyOptions: Difficulty[] = [{
    display: "easy",
    numericDifficulty: 1
}, {
    display: "medium",
    numericDifficulty: 5
}, {
    display: "hard",
    numericDifficulty: 8
}];

interface Difficulty {
    display: "easy" | "medium" | "hard",
    numericDifficulty: number
};
interface GameConfig {
    game?: Game;
    selectedNumberOfMultipleChoiceOptions: NumberOfMultipleChoiceOptions;
    difficulty: Difficulty;
};

interface AppContextProviderOptions {
    gameConfig: GameConfig;
    children: ReactNode;
};

interface QuizState {
    remainingQuestions?: Question[];
    multipleChoiceOptions?: Question[];
    quizItem?: Question;
    promptCategory: string;
    currentIncorrectPile: Question[];
    currentIncorrectResponses: Question[];
    aggregateIncorrectPile: Question[];
    questions?: Question[];
};

interface AppState {
    gameConfig: GameConfig;
    questionPool?: Question[];
    quiz: QuizState;
};

enum AppActionType {
    GameSelected = "[Game] Game Selected",
    Play = "[Game] Play Game",
    Configure = "[Game] Update Game Configuration",
    AnswerQuestion = '[Game] Answer Question',
    QuizPoolLoaded = '[Game] Quiz Pool Loaded',
    GameCompleted = '[Game] Quiz Complete',
    ResetQuizState = '[Game] Reset Quiz State'
};

interface Question {
    key: string;
    difficulty: number;
};

interface AppAction {
    type: AppActionType,
    payload?: any
};

const initialStateQuizItem: QuizState = {
    questions: [],
    promptCategory: 'name',
    currentIncorrectPile: [],
    currentIncorrectResponses: [],
    aggregateIncorrectPile: []
};

const initialStateApp: AppState = {
    gameConfig: {
        game: "flags",
        difficulty: difficultyOptions[0],
        selectedNumberOfMultipleChoiceOptions: 4
    },
    quiz: initialStateQuizItem
};

export type { Game, Screen, Question, NumberOfMultipleChoiceOptions, Difficulty, GameConfig, AppContextProviderOptions, QuizState, AppState, AppAction };
export { AppActionType, initialStateQuizItem, initialStateApp, difficultyOptions };