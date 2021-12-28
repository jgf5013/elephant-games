import { Difficulty, Game, GameConfig, Question, QuizState } from "../state/app-context";

import { getRandomElements } from "@elephant-games/utils";

const fetchQuestionPool = (game: GameConfig): Promise<Question[]> => {
    return game.fetchQuestionPool();
};

const isAnswerCorrect = (gameConfig: GameConfig, prompt: QuizState, response: unknown): boolean => {
    const currentPrompt = prompt as unknown;
    return gameConfig.isAnswerCorrect(currentPrompt as QuizState, response as string);
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

export { fetchQuestionPool, isAnswerCorrect, filterDifficulty, getMultipleChoiceResponses, getQuestionFromKey };