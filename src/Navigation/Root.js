import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function Root() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
