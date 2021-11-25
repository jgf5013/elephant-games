import { AppContextProvider, MultipleChoice, Prompt } from '@elephant-games/game';
import { flags } from '@elephant-games/geopolitical';
import { getRandomElements } from '@elephant-games/utils';
import React from 'react';
import {
  SafeAreaView, ScrollView, StatusBar, StyleSheet, View
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';


const numberOfSelectionsPerQuestion = 4;

const App = () => {
  const countries = getRandomElements<string>(flags, numberOfSelectionsPerQuestion);

  return (
      <AppContextProvider gameConfig={{game: "flags", multipleChoiceResponses: 4}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
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
          </ScrollView>
        </SafeAreaView>
      </AppContextProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
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
  },
  answer: {
    padding: 10,
    flexGrow: 1
  },
});

export default App;
