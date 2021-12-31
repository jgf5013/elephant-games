import React, { useContext, useEffect } from 'react';
import { View } from "react-native";
import { navigate } from "../../../../data-access/services/root-navigation";
import { AppContext } from '../../../../data-access/state/react/app-context';


export const Prompt = () => {
    const context = useContext(AppContext);
    const { state } = context;
    const { gameService, gameConfig, quiz } = state;

    // console.log('Prompt - quiz.remainingQuestions.length=', quiz.remainingQuestions.length);
    useEffect(() => {
        if (quiz.remainingQuestions.length === 0 && (typeof quiz.quizItem === "undefined")) {
            navigate("Completed");
        }
    }, [quiz.remainingQuestions, quiz.quizItem]);
    const prompt = gameService.getGamePrompt({
        game: gameConfig.game,
        quiz
    });
    return (
        <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
            {prompt}
        </View>);
};