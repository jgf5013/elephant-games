import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { Prompt } from '../../quiz-item/prompt/react-native/Prompt';
import { MultipleChoice } from '../../response/multiple-choice/react-native/MultipleChoice';

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'floralwhite',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 24,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
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
                <View style={styles.sectionContainer}>
                    <View style={styles.answersContainer}>
                        <MultipleChoice />
                    </View>
                </View>
            </View>
        </>
    );
};

export { PlayContainer };