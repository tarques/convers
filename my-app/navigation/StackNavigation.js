import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import converterScreen from '../screens/converterScreen';
// import imcScreen from '../screens/imcScreen';
import medidaScreen from '../screens/medidaScreen';
import homeScreen from '../screens/homeScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Conversor Moeda" component={converterScreen} />
      <Stack.Screen name="Calculadora Imc" component={imcScreen} />
      <Stack.Screen name="Conversor Medidas" component={medidaScreen} />
    </Stack.Navigator>
  );
}