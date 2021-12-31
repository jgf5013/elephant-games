import { toTitleCase } from "@elephant-games/utils";
import React, { useContext } from 'react';
import { View } from "react-native";
import { ButtonGroup, Text, useTheme } from 'react-native-elements';
import { AppActionType, Difficulty, difficultyOptions, NumberOfMultipleChoiceOptions } from "../../../data-access/state/app-context";
import { AppContext } from "../../../data-access/state/react/app-context";

const numberOfMultipleChoiceOptions: NumberOfMultipleChoiceOptions[] = [2, 4, 8];


const Settings = () => {
    const { theme } = useTheme();
    const context = useContext(AppContext);
    const { state, dispatch } = context;
    const multipleChoiceStateIndex = numberOfMultipleChoiceOptions.indexOf(state.gameConfig.selectedNumberOfMultipleChoiceOptions);
    const difficultyStateIndex = difficultyOptions.map((d) => d.numericDifficulty).indexOf(state.gameConfig.difficulty.numericDifficulty);

    const onNumberOfMultipleChoiceSelectChange = (selectedIndex: number) => {
        dispatch({
            type: AppActionType.Configure,
            payload: {
                selectedNumberOfMultipleChoiceOptions: numberOfMultipleChoiceOptions[selectedIndex]
            }
        });
    };

    const onDifficultyChange = (difficulty: Difficulty) => {
        dispatch({
            type: AppActionType.Configure,
            payload: {
                difficulty
            }
        });
    };

    return (
        <>
            <View style={{display: 'flex', justifyContent: 'center'}}>
                <Text h4>Multiple Choice</Text>
                <ButtonGroup
                    buttons={numberOfMultipleChoiceOptions.map((i) => `${i} Options`)}
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
                    buttons={difficultyOptions.map((difficulty) => toTitleCase(difficulty.display))}
                    selectedIndex={difficultyStateIndex}
                    onPress={(buttonIndex: number) => {
                        onDifficultyChange(difficultyOptions[buttonIndex]);
                    }}
                    containerStyle={{ marginBottom: 20 }}
                />
            </View>
        </>
    );
};

export { Settings };
