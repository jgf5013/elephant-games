import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Game, Screen } from "../../../data-access/state/app-context";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'floralwhite',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 24,
    },
    body: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: Colors.white,
        justifyContent: 'space-around'
    },
    gameItem: {
        width: '40%'
    }
});

const Home = ({ navigation }) => {

    const handleOnClick = (selectedGame: Screen) => {
        navigation.navigate(selectedGame);
    };

    return (
        <>
            <View style={styles.header}>  
                <Text>Select Game</Text>
            </View>
            <View style={styles.body}>
                <Button style={styles.gameItem}
                    title="Play"
                    onPress={() => handleOnClick("quiz")} />
                <Button style={styles.gameItem}
                    title="Settings"
                    onPress={() => handleOnClick("settings")} />
            </View>
        </>
    );
};

export { Home };
