import {View, Text} from 'react-native';
import React from 'react';
import generalStyle from '../../Styles/GeneralStyle';

const Cart = () => {
  return (
    <View style={generalStyle.container}>
      <Text style={generalStyle.tabScreenTitle}>Cart</Text>
    </View>
  );
};

export default Cart;
