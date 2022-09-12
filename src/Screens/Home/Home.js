import {
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import generalStyle from '../../Styles/GeneralStyle';
import styles from './styles';
import {useTheme} from '@react-navigation/native';
import SearchBar from './Components/SearchBar';
import FilterChips from './Components/FilterChips';
import Card from './Components/Card';

const Home = props => {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={generalStyle.container}>
      <StatusBar
        animated={true}
        backgroundColor={colors.card}
        barStyle="dark-content"
      />
      <SearchBar {...props} />
      <FilterChips />
      <FlatList
        data={DUMMYDATA}
        renderItem={({item}) => <Card {...item} />}
        keyExtractor={item => item.company}
      />
    </SafeAreaView>
  );
};

export default Home;

const DUMMYDATA = [
  {
    company: 'Bazar India',
    properties: ['Equity', 'DMAT', 'Pvt Ltd'],
    toRaise: '15,00,00,000',
    raised: '333,792',
    launchDate: '24 days left',
    equity: '17.42%',
    investors: 175,
    imgURL: 'https://picsum.photos/id/1005/50/50',
    percentage: 67,
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only',
    price: 70,
  },
  {
    company: 'Madbow',
    properties: ['CCPS', 'Physcical', 'Public Ltd'],
    toRaise: '18,00,00,000',
    raised: '322,792',
    launchDate: '10 days left',
    equity: '15.2%',
    investors: 90,
    imgURL: 'https://picsum.photos/id/1005/50/50',
    percentage: 40,
    detail:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only',
    price: 50,
  },
];
