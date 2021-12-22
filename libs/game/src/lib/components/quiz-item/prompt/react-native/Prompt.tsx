import React, { useContext } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { AppState, Game, Question, QuizState } from "../../../../data-access/state/app-context";
import { AppContext } from '../../../../data-access/state/react/app-context';

import { Flag } from '@elephant-games/geopolitical';

export const Prompt = () => {
    const context = useContext(AppContext);
    const { state } = context;
    const { gameState, quiz } = state;

    const prompt = getGamePrompt({game: gameState.game, quiz});

    return (
        <View>  
            {prompt}
        </View>
    );
};

interface GetGamePromptOptions<Question> {
    game: Game,
    quiz: QuizState<Question>
};

const getGamePrompt = (options: GetGamePromptOptions<Question>) => {
    switch(options.game) {
        case "flags":
            console.log('getGamePrompt - options.quiz.quizItem=', options.quiz.quizItem);
            return options.quiz.quizItem ? <Flag country={options.quiz.quizItem.key} /> : null;
        case "periodic-table":
            return <Text>{options.quiz.quizItem ? options.quiz.quizItem[options.quiz.promptCategory] : null}</Text>
        default:
            return <Text>Error...</Text>;
    }
}
