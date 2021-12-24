import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Prompt } from '../../quiz-item/prompt/react-native/Prompt';
import { MultipleChoice } from '../../response/multiple-choice/react-native/MultipleChoice';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
      backgroundColor: Colors.white,
    },
    answersContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
});

const PlayContainer = () => {
    return (
        <>
            <View style={styles.header}>  
                <Prompt />
            </View>
            <View style={styles.body}>
                <View style={styles.answersContainer}>
                    <MultipleChoice />
                </View>
            </View>
        </>
    );
};

export { PlayContainer };