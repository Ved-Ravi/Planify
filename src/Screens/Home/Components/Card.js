import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {heightScale, screenWidth, widthScale} from '../../../utils';
import {MyTheme} from '../../../Constants';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import generalStyle from '../../../Styles/GeneralStyle';
import {FlatList} from 'react-native-gesture-handler';

const {colors} = MyTheme;
const COM_IMAGE = 'https://picsum.photos/id/1005/70/70';

const Card = (item) => {
  const {
    company,
    properties,
    detail,
    toRaise,
    raised,
    equity,
    launchDate,
    imgURL,
    percentage,
    investors,
    price,
  } = item;
  const [searchTxt, setSearchTxt] = useState('');

  const renderCard = ({item}) => {
    return (
      <View
        style={{
          ...generalStyle.itemCenter,
          height: 25,
          backgroundColor: '#efefef',
          marginRight: 10,
          paddingHorizontal: 7,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 12, fontWeight: '500'}}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <View style={{}}>
          <Image
            source={{uri: imgURL}}
            style={styles.img}
            resizeMode="contain"
          />
        </View>
        <View style={styles.comBox}>
          <Text style={styles.comtitle}>{company}</Text>
          <FlatList renderItem={renderCard} data={properties} horizontal />
        </View>
        <View style={styles.priceView}>
          <Text style={styles.priceTxt}>₹ {price}</Text>
        </View>
      </View>
      <View style={styles.detailBox}>
        <Text numberOfLines={3} style={styles.dtlTxt}>
          {detail}
        </Text>
      </View>

      <View style={{...styles.detailBox, ...styles.dataBox}}>
        <View style={{...styles.dataCont}}>
          <Text style={styles.dataHead}>To Raised</Text>
          <Text style={styles.dataTxt}>₹ {toRaise}</Text>
        </View>
        <View style={{...styles.dataCont, ...generalStyle.itemCenter}}>
          <Text style={styles.dataHead}>Launch Date</Text>
          <Text style={styles.dataTxt}>{launchDate}</Text>
        </View>
        <View
          style={{
            ...styles.dataCont,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}>
          <CountdownCircleTimer
            initialRemainingTime={percentage}
            duration={100}
            strokeWidth={6}
            size={60}
            colors={[colors.secondary]}
            rotation="counterclockwise"
          >
            {({remainingTime}) => <Text>{remainingTime} %</Text>}
          </CountdownCircleTimer>
        </View>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: colors.border,
          marginHorizontal: 15,
          marginTop: 15,
          marginBottom: 0
        }}
      />
      <View style={{...styles.detailBox, ...styles.dataBox, marginBottom: 15}}>
        <View style={{...styles.dataCont, alignItems: 'flex-start'}}>
          <View
            style={{
              ...generalStyle.itemCenter,
            }}>
            <Text style={styles.dataTxt}>₹ {raised}</Text>
            <Text style={styles.dataHead}>Raised</Text>
          </View>
        </View>
        <View style={{...styles.dataCont, ...generalStyle.itemCenter}}>
          <Text style={styles.dataTxt}>{equity}%</Text>
          <Text style={styles.dataHead}>Equity</Text>
        </View>
        <View
          style={{
            ...styles.dataCont,
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              ...generalStyle.itemCenter,
            }}>
            <Text style={{...styles.dataTxt}}>{investors}</Text>
            <Text style={styles.dataHead}>Investors</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: widthScale(20),
    borderRadius: 5,
    backgroundColor: colors.card,
    marginBottom: heightScale(15)
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colors.border,
    margin: 10,
  },
  comBox: {
    flex: 1,
  },
  comtitle: {
    fontSize: 18,
    fontWeight: '800',
    alignSelf: 'flex-start',
  },
  priceView: {
    width: 60,
    alignItems: 'flex-end',
  },
  priceTxt: {
    fontSize: 18,
    fontWeight: '800',
  },
  detailBox: {
    marginHorizontal: widthScale(15),
    alignItems: 'center',
  },
  dtlTxt: {
    fontWeight: '500',
    lineHeight: 25,
  },
  dataBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dataCont: {
    flex: 1,
  },
  dataHead: {
    fontWeight: '600',
    color: colors.border,
  },
  dataTxt: {
    fontWeight: '900',
    marginTop: 5,
    fontSize: 15,
  },
});

const DATA = ['Equity', 'DMAT', 'Pvt Ltd'];
