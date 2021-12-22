import { AppActionType, AppContext, Difficulty, MultipleChoiceOptions } from "@elephant-games/game";
import { toTitleCase } from "@elephant-games/utils";
import React, { useContext } from 'react';
import { View } from "react-native";
import { ButtonGroup, Text, useTheme } from 'react-native-elements';
import { diff } from "react-native-reanimated";

const multipleChoiceOptions: MultipleChoiceOptions[] = [2, 4, 8];
const difficultyOptions: Difficulty[] = ['easy', 'medium', 'hard'];

const Settings = () => {
    const { theme } = useTheme();
    const context = useContext(AppContext);
    const { state, dispatch } = context;
    const multipleChoiceStateIndex = multipleChoiceOptions.indexOf(state.gameState.multipleChoiceResponses);
    const difficultyStateIndex = difficultyOptions.indexOf(state.gameState.difficulty);

    const onNumberOfMultipleChoiceSelectChange = (selectedIndex: MultipleChoiceOptions) => {
        dispatch({
            type: AppActionType.Configure,
            payload: {
                multipleChoiceResponses: multipleChoiceOptions[selectedIndex]
            }
        });
    };

    const onDifficultyChange = (selectedIndex: Difficulty) => {
        dispatch({
            type: AppActionType.Configure,
            payload: {
                difficulty: difficultyOptions[selectedIndex]
            }
        });
    };

    return (
        <>
            <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text h4>Multiple Choice</Text>
                <ButtonGroup
                    buttons={multipleChoiceOptions.map((i) => `${i} Options`)}
                    selectedIndex={multipleChoiceStateIndex}
                    onPress={(value) => {
                        onNumberOfMultipleChoiceSelectChange(value);
                    }}
                    containerStyle={{ marginBottom: 20 }}
                />
            </View>
            <View>
                <Text h4>Difficulty</Text>
                <ButtonGroup
                    buttons={difficultyOptions.map((difficulty) => toTitleCase(difficulty))}
                    selectedIndex={difficultyStateIndex}
                    onPress={(value) => {
                        onDifficultyChange(value);
                    }}
                    containerStyle={{ marginBottom: 20 }}
                />
            </View>
        </>
    );
};

export { Settings };
