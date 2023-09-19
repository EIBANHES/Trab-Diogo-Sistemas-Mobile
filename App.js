import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login'
import CadastroP2 from './CadastroP2';
import CadastroP1 from './CadastroP1';
import CadastroP3 from './CadastroP3';
import Verificacao from './Verificacao';
import Home from './Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create Account" component={CadastroP1} />
        <Stack.Screen name="Sign up" component={CadastroP2} />
        <Stack.Screen name="Create Password" component={CadastroP3} />
        <Stack.Screen name="Verificacao" component={Verificacao} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

