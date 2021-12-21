import { getRandomElements, toTitleCase } from '@elephant-games/utils';
import React, { useContext } from 'react';
import { Button, StyleSheet, View } from "react-native";
import { AppActionType } from "../../../../data-access/state/app-context";
import { AppContext } from '../../../../data-access/state/react/app-context';

const styles = StyleSheet.create({
    answer: {
        padding: 10,
        flexGrow: 1
    },
});

const MultipleChoice = () => {
    const context = useContext(AppContext);
    const { state , dispatch} = context;
    const { gameState, quiz } = state;

    const multipleChoiceOptions = getRandomElements([
        ...getRandomElements(quiz.remainingQuestions, gameState.multipleChoiceResponses - 1),
        quiz.quizItem
    ], gameState.multipleChoiceResponses);

    const handleResponse = (answer: unknown) => {
        dispatch({ type: AppActionType.AnswerQuestion, payload: answer });
    };

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

export { MultipleChoice };
