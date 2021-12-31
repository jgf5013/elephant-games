import { Difficulty, GamePrompt, Question, QuizState } from "../state/app-context";

import { getRandomElements } from "@elephant-games/utils";

interface BaseGameService {
    filterDifficulty: (quizPool: Question[], difficulty: Difficulty) => Question[];
    getMultipleChoiceResponses: (questions: Question[], answer: Question, selectedNumberOfMultipleChoiceOptions: number) => Question[];
    getQuestionFromKey: (questions: Question[], key: string) => Question;
}

interface GameService extends BaseGameService {
    fetchQuestionPool: () => Promise<Question[]>;
    isAnswerCorrect: (currentPrompt: QuizState, response: string) => boolean;
    getGamePrompt: GamePrompt
};


const filterDifficulty = (quizPool: Question[], difficulty: Difficulty): Question[] => {
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
    console.log('game.service > getQuestionFromKey - questions=', questions);
    console.log('game.service > getQuestionFromKey - key=', key);
    const foundQuestion = questions.filter((question) => question.key === key)[0];
    return foundQuestion;
};

const baseGameService: BaseGameService = {
    filterDifficulty,
    getMultipleChoiceResponses,
    getQuestionFromKey
}

export type { GameService };
export { baseGameService, filterDifficulty, getMultipleChoiceResponses, getQuestionFromKey };