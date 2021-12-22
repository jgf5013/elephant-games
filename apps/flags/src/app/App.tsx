import { AppContextProvider, Home, initialStateApp, PlayContainer, Settings } from '@elephant-games/game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Button } from 'react-native-elements';
import { theme } from './Theme';


const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <AppContextProvider gameState={{...initialStateApp.gameState}}>
            <SafeAreaProvider>
                <StatusBar barStyle="dark-content" />
                <ThemeProvider useDark={true} theme={theme}>
                    <NavigationContainer>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={Home}/>
                            <Stack.Screen name="Quiz" component={PlayContainer}/>
                            <Stack.Screen name="Settings" component={Settings}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </AppContextProvider>
    );
};

export default AppContainer;