import { AppContextProvider, Home, Completed, initialStateApp, navigationRef, PlayContainer, Settings } from '@elephant-games/game';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, Button } from 'react-native-elements';
import { theme } from './Theme';


const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <AppContextProvider gameConfig={{...initialStateApp.gameConfig}}>
            <SafeAreaProvider>
                <StatusBar barStyle="dark-content" />
                <ThemeProvider useDark={true} theme={theme}>
                    <NavigationContainer ref={navigationRef}>
                        <Stack.Navigator initialRouteName="Home">
                            <Stack.Screen name="Home" component={Home}/>
                            <Stack.Screen name="Settings" component={Settings}/>
                            <Stack.Screen name="Quiz" component={PlayContainer}/>
                            <Stack.Screen name="Completed" component={Completed}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </AppContextProvider>
    );
};

export default AppContainer;