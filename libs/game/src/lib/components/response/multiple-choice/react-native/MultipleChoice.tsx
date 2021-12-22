import { getRandomElements, toTitleCase } from '@elephant-games/utils';
import React, { useContext } from 'react';
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';
import { AppActionType, Question } from "../../../../data-access/state/app-context";
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

    const multipleChoiceOptions: Question[] = getRandomElements([
        ...getRandomElements(quiz.remainingQuestions, gameState.multipleChoiceResponses - 1),
        quiz.quizItem
    ], gameState.multipleChoiceResponses);

    const handleResponse = (answer: string) => {
        dispatch({ type: AppActionType.AnswerQuestion, payload: answer });
    };

    return (
        <>{
            multipleChoiceOptions.map((responseOption) => {
                if (typeof responseOption.key === "string") {
                    return (
                        <View
                            key={`flag-${responseOption.key}`}
                            style={styles.answer}>
                            <Button
                                title={toTitleCase(responseOption.key)}
                                onPress={() => handleResponse(responseOption.key)}
                            />
                        </View>
                    );
                }
            })
        }</>
    );
};

export { MultipleChoice };
