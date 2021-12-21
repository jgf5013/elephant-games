import React, { useContext } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { AppState, Game, QuizState } from "../../../../data-access/state/app-context";
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

interface GetGamePromptOptions<E> {
    game: Game,
    quiz: QuizState<E>
};

const getGamePrompt = (options: GetGamePromptOptions<unknown>) => {
    switch(options.game) {
        case "flags":
            return options.quiz.quizItem ? <Flag country={options.quiz.quizItem as string} /> : null;
        case "periodic-table":
            return <Text>{options.quiz.quizItem ? options.quiz.quizItem[options.quiz.promptCategory] : null}</Text>
        default:
            return <Text>Error...</Text>;
    }
}
