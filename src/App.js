import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';
import {MyTheme} from './Constants';

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
