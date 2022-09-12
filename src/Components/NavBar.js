import {StyleSheet, Text, View, Image, Pressable, Linking} from 'react-native';
import React from 'react';
import {heightScale, screenWidth, widthScale} from '../utils';
import {MyTheme} from '../Constants';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const NAVBAR_HEIGHT = heightScale(70);
const {colors} = MyTheme;
const LOGO_URL =
  'https://planify-main.s3.amazonaws.com/static/stocks/imgs/planify-logo.png';
const PROFILE_IMAGE = 'https://picsum.photos/id/1027/60/60';
const PHONE_NUMBER = '07065560002';

const NavBar = ({navigation}) => {
  return (
    <View style={styles.nav}>
      <View style={styles.iconBox}>
        <Entypo
          name="menu"
          size={heightScale(40)}
          color={colors.primary}
          onPress={() => navigation.openDrawer()}
        />
        <Image
          source={{
            uri: LOGO_URL,
          }}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      <View style={styles.iconBox}>
        <FontAwesome
          name="phone"
          size={heightScale(22)}
          color={colors.primary}
          style={styles.icon}
          onPress={() => Linking.openURL(`tel:${PHONE_NUMBER}`)}
        />
        <Fontisto
          name="search"
          size={heightScale(22)}
          color={colors.primary}
          style={styles.icon}
        />
        <MaterialIcons
          name="notifications-none"
          size={heightScale(26)}
          color={colors.primary}
          style={styles.icon}
        />

        <Image
          source={{uri: PROFILE_IMAGE}}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  nav: {
    height: NAVBAR_HEIGHT,
    backgroundColor: colors.card,
    paddingVertical: heightScale(10),
    paddingHorizontal: widthScale(15),
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: heightScale(30),
    width: widthScale(90),
    marginHorizontal: widthScale(10),
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: widthScale(16),
  },
  img: {
    height: 45,
    width: 45,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.border,
  },
});
