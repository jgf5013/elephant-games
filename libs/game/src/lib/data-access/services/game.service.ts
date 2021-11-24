import { Game, QuizState } from "../state/app-context";

import { Element, fetchElements } from "@elephant-games/chemistry";
import { flags } from '@elephant-games/geopolitical';

import { isAnswerCorrect as isPeriodicTableAnswerCorrect } from '@elephant-games/chemistry';

const fetchQuizQuestionPool = (game: Game) => {
    switch (game) {
        case "flags":
            console.log(`getting ${flags.length} flags...`);
            return Promise.resolve([...flags]);
        case "periodic-table":
            return fetchElements();
    }
};

const isAnswerCorrect = <E>(game: Game, prompt: QuizState<E>, response: unknown): boolean => {
    const currentPrompt = prompt as unknown;
    switch (game) {
        case "flags":
            return true;
        case "periodic-table":
            return isPeriodicTableAnswerCorrect(currentPrompt as QuizState<Element>, response as number);
    }
    
}

export { fetchQuizQuestionPool, isAnswerCorrect };