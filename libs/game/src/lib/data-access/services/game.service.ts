import { Difficulty, Game, Question, QuizState } from "../state/app-context";

import { fetchElements } from "@elephant-games/chemistry";
import { fetchFlags } from '@elephant-games/geopolitical';

import { isAnswerCorrect as isPeriodicTableAnswerCorrect } from '@elephant-games/chemistry';
import { isAnswerCorrect as isFlagAnswerCorrect } from '@elephant-games/geopolitical';
import { getRandomElements } from "@elephant-games/utils";

const fetchQuizQuestionPool = (game: Game): Promise<Question[]> => {
    switch (game) {
        case "flags":
            return fetchFlags();
        case "periodic-table":
            return fetchElements();
    }
};

const isAnswerCorrect = <E>(game: Game, prompt: QuizState, response: unknown): boolean => {
    const currentPrompt = prompt as unknown;
    switch (game) {
        case "flags":
            return isFlagAnswerCorrect(currentPrompt as QuizState, response as string);
        case "periodic-table":
            return isPeriodicTableAnswerCorrect(currentPrompt as QuizState, response as number);
        default:
            console.error("isAnswerCorrect - invalid game type!!");
            throw new Error("INVALID_ARG");
    }
};

const filterDifficulty = (quizPool: Question[], difficulty: Difficulty): Question[] => {
    console.log('filterDifficulty - quizPool.length=', quizPool.length);
    console.log('filterDifficulty - difficulty=', difficulty);
    return [
        ...quizPool.filter((question: Question) => {
            return question.difficulty <= difficulty.numericDifficulty;
        })
    ];
};

const getMultipleChoiceResponses = (questions: Question[], answer: Question, selectedNumberOfMultipleChoiceOptions: number): Question[] => {
        const responseOptions = getRandomElements([
            ...getRandomElements(
                questions.filter((question) => question !== answer),
                selectedNumberOfMultipleChoiceOptions - 1
            ),
            answer
        ], selectedNumberOfMultipleChoiceOptions);

    return responseOptions;
};

const getQuestionFromKey = (questions: Question[], key: string): Question => {
    const foundQuestion = questions.filter((question) => question.key === key)[0];
    return foundQuestion;
}

export { fetchQuizQuestionPool, isAnswerCorrect, filterDifficulty, getMultipleChoiceResponses, getQuestionFromKey };