import React, { useContext } from 'react';
import { StyleSheet, Text, View } from "react-native";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { AppActionType, Game, Screen } from "../../../data-access/state/app-context";
import { Button } from 'react-native-elements';
import { AppContext } from "../../../data-access/state/react/app-context";


const styles = StyleSheet.create({
    bodyContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
});

const Home = ({ navigation }) => {
    const context = useContext(AppContext);
    const { dispatch } = context;

    const playGame = () => {
        dispatch({ type: AppActionType.Play });
        navigation.navigate("Quiz");
    };
    const goToSettings = () => {
        navigation.navigate("Settings");
    };

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.body}>
                <Button
                    title="Play"
                    onPress={() => playGame()} />
                <Button
                    title="Settings"
                    onPress={() => goToSettings()} />
            </View>
        </View>
    );
};

export { Home };
