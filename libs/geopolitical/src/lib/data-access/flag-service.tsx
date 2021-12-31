import React from 'react';
import { baseGameService, AnswerChecker, GamePrompt, GameService, Question } from "@elephant-games/game";
import { Flag } from "../components/Flag/react-native/Flag"; // TODO: This should be framework (react vs react-native)-agnostic. Ideally, this should just be a .ts file and UI stuff should be in another place.
import flagData from './flag-data.json';

type FlagData = any & Question;

const flags: Record<string, FlagData> = flagData;

const fetchFlags = (): Promise<FlagData[]> => {
    const mappedFlags = Object.keys(flags).map((country) => {
        return {
            key: country,
            ...flags[country]
        };
    })
    return Promise.resolve([...mappedFlags]);
};

const fetchFlag = (flag: string) => {
    return flags[flag];
};


const getGamePrompt: GamePrompt = (options) => {
    return options.quiz.quizItem ? <Flag country={ options.quiz.quizItem.key } /> : null;
};

const isAnswerCorrect: AnswerChecker = (quizState, answer) => (quizState.quizItem?.key === answer);

const gameService: GameService = {
    fetchQuestionPool: fetchFlags,
    isAnswerCorrect,
    getGamePrompt,
    ...baseGameService
};

export { gameService, fetchFlag };