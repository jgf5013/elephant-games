import { Game, QuizState } from "../state/app-context";

import { Element, fetchElements } from "@elephant-games/chemistry";
import { flags } from '@elephant-games/geopolitical';

import { isAnswerCorrect as isPeriodicTableAnswerCorrect } from '@elephant-games/chemistry';
import { isAnswerCorrect as isFlagAnswerCorrect } from '@elephant-games/geopolitical';

const fetchQuizQuestionPool = (game: Game) => {
    switch (game) {
        case "flags":
            return Promise.resolve([...flags]);
        case "periodic-table":
            return fetchElements();
    }
};

const isAnswerCorrect = <E>(game: Game, prompt: QuizState<E>, response: unknown): boolean => {
    const currentPrompt = prompt as unknown;
    switch (game) {
        case "flags":
            return isFlagAnswerCorrect(currentPrompt as QuizState<string>, response as string);
        case "periodic-table":
            return isPeriodicTableAnswerCorrect(currentPrompt as QuizState<Element>, response as number);
        default:
            console.error("isAnswerCorrect - invalid game type!!");
            throw new Error("INVALID_ARG");
    }
    
}

export { fetchQuizQuestionPool, isAnswerCorrect };