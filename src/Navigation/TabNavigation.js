import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import Market from '../Screens/Market';
import Discover from '../Screens/Discover';
import Basket from '../Screens/Basket';
import Cart from '../Screens/Cart';
import {MyTheme} from '../Constants';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {heightScale, widthScale} from '../utils';
import generalStyle from '../Styles/GeneralStyle';
const {colors} = MyTheme;
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import NavBar from '../Components/NavBar';

const Tab = createBottomTabNavigator();
const ICON_SIZE = 20;

function Tabs(props) {
  return (
    <>
      <NavBar {...props} />

      <Tab.Navigator
        screenOptions={{
          // tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.white,
            height: heightScale(64),
            paddingTop: 2,
            paddingBottom: 5,
          },
          tabBarInactiveTintColor: colors.border,
          tabBarActiveTintColor: colors.secondary,
          tabBarLabelStyle: {
            fontSize: 14,
          },
        }}>
        <Tab.Screen
          name="Startup"
          component={Home}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Octicons name="rocket" color={color} size={ICON_SIZE} />
            ),
          }}
        />

        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Fontisto name="shopping-store" color={color} size={ICON_SIZE} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarButton: ({onPress}) => (
              <View
                style={{...generalStyle.itemCenter, ...styles.btnContainer}}>
                <Pressable
                  onPress={onPress}
                  style={{...generalStyle.itemCenter, ...styles.btn}}>
                  <SimpleLineIcons
                    name="handbag"
                    size={26}
                    color={colors.white}
                  />
                </Pressable>
              </View>
            ),
            // tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <FontAwesome name="th-large" color={color} size={ICON_SIZE} />
            ),
          }}
        />
        <Tab.Screen
          name="Basket"
          component={Basket}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Fontisto name="shopping-basket" color={color} size={ICON_SIZE} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: heightScale(65),
    width: widthScale(100),
  },
  btn: {
    height: 65,
    width: 65,
    borderRadius: 32,
    top: -30,
    elevation: 5,
    backgroundColor: colors.secondary,
  },
});

export default Tabs;
