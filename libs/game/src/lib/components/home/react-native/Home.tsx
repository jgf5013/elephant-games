import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Game, Screen } from "../../../data-access/state/app-context";
import { Button } from 'react-native-elements';

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

    const handleOnClick = (selectedGame: Screen) => {
        navigation.navigate(selectedGame);
    };

    return (
        <View style={styles.bodyContainer}>
            <View style={styles.body}>
                <Button
                    title="Play"
                    onPress={() => handleOnClick("Quiz")} />
                <Button
                    title="Settings"
                    onPress={() => handleOnClick("Settings")} />
            </View>
        </View>
    );
};

export { Home };
