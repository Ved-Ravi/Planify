import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Linking,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {heightScale, screenWidth, widthScale} from '../../../utils';
import {MyTheme} from '../../../Constants';
import generalStyle from '../../../Styles/GeneralStyle';

const {colors} = MyTheme;

const FilterChips = () => {
  const [listData, setListData] = useState(DATA);

  const onChipClick = item => {

    const selectedChip = listData.map(itm => {
      if (itm.heading == item.heading) {
        return {...itm, isSelected: true};
      } else {
        return itm;
      }
    });
    setListData(selectedChip);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.chip,
          backgroundColor: item.isSelected ? colors.secondary : colors.card,
          ...generalStyle.itemCenter,
        }}
        onPress={() => onChipClick(item)}>
        <Text
          style={{
            ...styles.chipText,
            color: item.isSelected ? colors.card : colors.text,
          }}>
          {item.heading}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{height: heightScale(50), marginBottom: heightScale(7)}}>
      <FlatList
        contentContainerStyle={styles.container}
        data={listData}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FilterChips;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthScale(20),
    alignItems: 'center',
  },
  chip: {
    paddingHorizontal: widthScale(18),
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: colors.border,
    height: 40,
  },
  chipText: {
    // color: colors.card,
    fontWeight: '500',
    fontSize: heightScale(15),
  },
});

const DATA = [
  {heading: 'All', isSelected: true},
  {heading: 'Startup', isSelected: false},
  {heading: 'Early Revenue', isSelected: false},
  {heading: 'Ideas', isSelected: false},
];
