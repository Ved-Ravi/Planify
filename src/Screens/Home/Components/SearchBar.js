import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {heightScale, screenWidth, widthScale} from '../../../utils';
import {MyTheme} from '../../../Constants';
import Fontisto from 'react-native-vector-icons/Fontisto';

const {colors} = MyTheme;

const SearchBar = () => {
  const [searchTxt, setSearchTxt] = useState('');

  return (
    <View style={styles.barContainer}>
      <Fontisto
        name="search"
        size={heightScale(20)}
        color={colors.primary}
        style={styles.icon}
      />
      <TextInput
        style={styles.typeBox}
        placeholder="Search"
        value={searchTxt}
        onChangeText={setSearchTxt}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  barContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
    marginHorizontal: widthScale(20),
    marginVertical: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.card,
  },
  icon: {
    marginLeft: 15,
    marginRight: 10,
  },
  typeBox: {
    flex: 1,
  },
});
