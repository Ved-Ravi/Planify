import {View, Text} from 'react-native';
import React from 'react';
import generalStyle from '../../Styles/GeneralStyle';

const Basket = () => {
  return (
    <View style={generalStyle.container}>
      <Text style={generalStyle.tabScreenTitle}>Basket</Text>
    </View>
  );
};

export default Basket;
