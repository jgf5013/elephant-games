import { AppActionType, AppContext } from "@elephant-games/game";
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-native-elements';

const multipleChoiceOptions = [2, 4, 8];

const Settings = () => {
    const context = useContext(AppContext);
    const { state, dispatch } = context;
    const stateIndex = multipleChoiceOptions.indexOf(state.gameState.multipleChoiceResponses);

    const onNumberOfMultipleChoiceSelectChange = (selectedIndex: number) => {
        dispatch({
            type: AppActionType.Configure,
            payload: {
                multipleChoiceResponses: multipleChoiceOptions[selectedIndex]
            }
        });
    };


    return (
        <ButtonGroup
            buttons={multipleChoiceOptions.map((i) => `${i} Choices`)}
            selectedIndex={stateIndex}
            onPress={(value) => {
                onNumberOfMultipleChoiceSelectChange(value);
            }}
            containerStyle={{ marginBottom: 20 }}
        />
    );
};

export { Settings };
