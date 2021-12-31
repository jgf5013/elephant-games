import { AppContextProvider, Completed, Home, initialStateApp, navigationRef, PlayContainer, Settings } from '@elephant-games/game';
import { gameService } from '@elephant-games/geopolitical';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './Theme';


const Stack = createNativeStackNavigator();

const AppContainer = () => {
    return (
        <AppContextProvider gameService={gameService} gameConfig={{...initialStateApp.gameConfig}}>
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