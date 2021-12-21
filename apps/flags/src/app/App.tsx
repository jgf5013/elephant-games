import { AppContextProvider, Home, PlayContainer, Settings } from '@elephant-games/game';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <AppContextProvider gameState={{ screen: "home", game: "flags", multipleChoiceResponses: 4 }}>
            <SafeAreaProvider>
                <StatusBar barStyle="dark-content" />
                <NavigationContainer>
                <Stack.Navigator initialRouteName="home">
                    <Stack.Screen name="home" component={Home}/>
                    <Stack.Screen name="quiz" component={PlayContainer}/>
                    <Stack.Screen name="settings" component={Settings}/>
                </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </AppContextProvider>
    );
};

export default AppContainer;