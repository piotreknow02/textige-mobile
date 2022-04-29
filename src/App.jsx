import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './pages/home';
import LoginPage from './pages/login';

const Stack = createStackNavigator()

export default function App()
{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomePage}/>
                <Stack.Screen name="Login" component={LoginPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
