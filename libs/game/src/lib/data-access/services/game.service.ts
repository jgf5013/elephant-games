import { Difficulty, Game, Question, QuizState } from "../state/app-context";

import { Element, fetchElements } from "@elephant-games/chemistry";
import { fetchFlags } from '@elephant-games/geopolitical';

import { isAnswerCorrect as isPeriodicTableAnswerCorrect } from '@elephant-games/chemistry';
import { isAnswerCorrect as isFlagAnswerCorrect } from '@elephant-games/geopolitical';

const difficultyMap: Record<Difficulty, number> = {
    "easy": 3,
    "medium": 6,
    "hard": 10
};

const fetchQuizQuestionPool = (game: Game): Promise<Question[]> => {
    console.log('fetching quiz questions...');
    switch (game) {
        case "flags":
            return fetchFlags();
        case "periodic-table":
            return fetchElements();
    }
};

const isAnswerCorrect = <E>(game: Game, prompt: QuizState<E>, response: unknown): boolean => {
    const currentPrompt = prompt as unknown;
    switch (game) {
        case "flags":
            return isFlagAnswerCorrect(currentPrompt as QuizState<Question>, response as string);
        case "periodic-table":
            return isPeriodicTableAnswerCorrect(currentPrompt as QuizState<Element>, response as number);
        default:
            console.error("isAnswerCorrect - invalid game type!!");
            throw new Error("INVALID_ARG");
    }
};

const filterDifficulty = (quizPool: Question[], difficulty: Difficulty): Question[] => {
    return [
        ...quizPool.filter((question) => {
            // console.log('question.difficulty=', question.difficulty);
            return question.difficulty <= difficultyMap[difficulty as string];
        })
    ];
}

export { fetchQuizQuestionPool, isAnswerCorrect, filterDifficulty };