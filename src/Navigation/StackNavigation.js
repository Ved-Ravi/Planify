import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './TabNavigation';
import Home from '../Screens/Home';
import Root from './Root';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={Root} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
