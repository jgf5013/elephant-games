import React, { useContext } from 'react';
import { Alert, Button, View, StyleSheet } from "react-native";
import { AppActionType, Game, QuizState } from "../../../../data-access/state/app-context";
import { AppContext } from '../../../../data-access/state/react/app-context';
import { toTitleCase } from '@elephant-games/utils';
import { isAnswerCorrect as isGameAnswerCorrect } from "@elephant-games/game";

const styles = StyleSheet.create({
    answer: {
        padding: 10,
        flexGrow: 1
    },
});

export const MultipleChoice = () => {
    const context = useContext(AppContext);
    const { state , dispatch} = context;
    const { gameConfig, quiz } = state;

    const multipleChoiceOptions = [
        ...(quiz.remainingQuestions ?? []).slice(0, gameConfig.multipleChoiceResponses - 1),
        quiz.quizItem
    ];

    const handleResponse = (answer: unknown) => {
        dispatch({ type: AppActionType.AnswerQuestion, payload: answer });
    }

    return (
        <>{
            multipleChoiceOptions.map((responseOption) => {
                if (typeof responseOption === "string") {
                    return (
                        <View
                            key={`flag-${responseOption}`}
                            style={styles.answer}>
                            <Button
                                title={toTitleCase(responseOption)}
                                onPress={() => handleResponse(responseOption)}
                            />
                        </View>
                    );
                }
            })
        }</>
    );
};

