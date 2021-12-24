import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text } from "react-native";
import { AppState, Game, Question, QuizState } from "../../../../data-access/state/app-context";
import { AppContext } from '../../../../data-access/state/react/app-context';

import { Flag } from '@elephant-games/geopolitical';
import { navigate } from "@elephant-games/game";

export const Prompt = () => {
    const context = useContext(AppContext);
    const { state } = context;
    const { gameConfig, quiz } = state;

    console.log('Prompt - quiz.remainingQuestions.length=', quiz.remainingQuestions.length);
    useEffect(() => {
        if (quiz.remainingQuestions.length === 0 && (typeof quiz.quizItem === "undefined")) {
            navigate("Completed")
        }
    } ,[quiz.remainingQuestions, quiz.quizItem])

    const prompt = getGamePrompt({game: gameConfig.game, quiz});

    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            {prompt}
        </View>);
};

interface GetGamePromptOptions<Question> {
    game: Game,
    quiz: QuizState
};

const getGamePrompt = (options: GetGamePromptOptions<Question>) => {
    switch(options.game) {
        case "flags":
            return options.quiz.quizItem ? <Flag country={options.quiz.quizItem.key} /> : null;
        case "periodic-table":
            return <Text>{options.quiz.quizItem ? options.quiz.quizItem[options.quiz.promptCategory] : null}</Text>
        default:
            return <Text>Error...</Text>;
    }
}
