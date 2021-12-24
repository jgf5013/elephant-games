import { getRandomElements, toTitleCase } from '@elephant-games/utils';
import React, { useContext } from 'react';
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';
import { AppActionType, Question } from "../../../../data-access/state/app-context";
import { AppContext } from '../../../../data-access/state/react/app-context';

const styles = StyleSheet.create({
    answer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        backgroundColor: 'ghostwhite'
        
    },
});

const MultipleChoice = () => {
    const context = useContext(AppContext);
    const { state , dispatch } = context;
    const { quiz } = state;

    const handleResponse = (answer: string) => {
        dispatch({ type: AppActionType.AnswerQuestion, payload: answer });
    };

    console.log('MultipleChoice - quiz.multipleChoiceOptions=', quiz.multipleChoiceOptions);
    return (
        <View style={styles.answer}>
            {
                quiz.multipleChoiceOptions.map((responseOption) => {
                    if (typeof responseOption.key === "string") {
                        const buttonStyle = {
                            ...(quiz.currentIncorrectResponses.map((option) => option.key)
                                .includes(responseOption.key) ? { backgroundColor: 'rgba(214, 61, 57, 1)' } : {}),
                            minWidth: '35%'
                        };
                            
                        return (
                            <View
                                key={`flag-${responseOption.key}`} 
                                style={{margin: 10}}>
                                <Button
                                    buttonStyle={buttonStyle}
                                    title={toTitleCase(responseOption.key)}
                                    onPress={() => handleResponse(responseOption.key)}
                                />
                            </View>
                        );
                    }
                })
            }
        </View>
    );
};

export { MultipleChoice };
