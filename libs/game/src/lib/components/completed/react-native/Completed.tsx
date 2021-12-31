import React, { useContext } from 'react';
import { StyleSheet, Text, View } from "react-native";
import { AppActionType, Game, Screen } from "../../../data-access/state/app-context";
import { Button } from 'react-native-elements';
import { AppContext } from "../../../data-access/state/react/app-context";

const styles = StyleSheet.create({
    bodyContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'dark-green'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
});

const Completed = ({ navigation }) => {
    const context = useContext(AppContext);
    const { dispatch } = context;

    const handleOnClick = () => {
        dispatch({ type: AppActionType.ResetQuizState });
        navigation.navigate("Home");
    };

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.body}>
                <Button
                    title="I know, I'm awesome!"
                    onPress={() => handleOnClick()} />
            </View>
        </View>
    );
};

export { Completed };
