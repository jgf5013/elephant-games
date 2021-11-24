import React, { useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Flag, flags } from '@elephant-games/geopolitical';
import { toTitleCase, getRandomElements } from '@elephant-games/utils';
import { Button, Alert } from 'react-native';


import { AppContextProvider, Prompt } from '@elephant-games/game';

const numberOfSelectionsPerQuestion = 4;

const App = () => {
  const countries = getRandomElements<string>(flags, numberOfSelectionsPerQuestion);

  return (
      <AppContextProvider appConfig={{game: "flags"}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          >
            {/* <View style={styles.header}>
              <Flag country={countries[0]}/>
            </View> */}
            <Prompt />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <View style={styles.answersContainer}>
                {
                  countries.map((country) => {
                    return (
                      <View
                        key={`flag-${country}`}
                        style={styles.answer}>
                        <Button
                          title={toTitleCase(country)}
                          onPress={() => Alert.alert(country)}
                        />
                      </View>
                    );
                  })
                }
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
