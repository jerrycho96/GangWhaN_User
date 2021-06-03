import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SectionList,
  StatusBar,
} from 'react-native';
import style from '../style/style';

const couponData = {
  gangwhacou: [
    {
      key: '0',
      name: '강화N 쿠폰',
      state: true,
      couprice: '5,000',
      mindeli: '17,000',
      startdate: '2021.02.08',
      findate: '2021.02.28',
    },
    {
      key: '1',
      name: '강화N 쿠폰',
      state: true,
      couprice: '2,000',
      mindeli: '17,000',
      startdate: '2021.02.08',
      findate: '2021.02.28',
    },
  ],
  kimchicou: [
    {
      key: '0',
      name: '강화김치찌개 쿠폰',
      state: false,
      couprice: '5,000',
      mindeli: '17,000',
      startdate: '2021.02.08',
      findate: '2021.02.28',
    },
    {
      key: '1',
      name: '강화김치찌개 쿠폰',
      state: true,
      couprice: '5,000',
      mindeli: '17,000',
      startdate: '2021.02.08',
      findate: '2021.02.28',
    },
  ],
};

// const DATA = [
//   {
//     title: '강화N 쿠폰',
//     data: {
//       state: true,
//       couprice: '5,000',
//       mindeli: '17,000',
//       startdate: '2021.02.08',
//       findate: '2021.02.28',
//     },
//   },
// ];

const DATA = [
  {
    title: '강화N 쿠폰',
    data: [
      {
        state: true,
        couprice: '2,000',
        mindeli: '17,000',
        startdate: '2021.02.08',
        findate: '2021.02.28',
      },
      {
        state: false,
        couprice: '2,000',
        mindeli: '17,000',
        startdate: '2021.02.08',
        findate: '2021.02.28',
      },
    ],
  },
  {
    title: '강화김치찌개 쿠폰',
    data: [
      {
        state: true,
        couprice: '2,000',
        mindeli: '17,000',
        startdate: '2021.02.08',
        findate: '2021.02.28',
      },
      {
        state: false,
        couprice: '2,000',
        mindeli: '17,000',
        startdate: '2021.02.08',
        findate: '2021.02.28',
      },
    ],
  },
];

export default function CouponScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 15,
        paddingBottom: 15,
        backgroundColor: 'white',
      }}>
      <SectionList
        stickySectionHeadersEnabled={false}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={RenderCoupon1}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.coutitle}>
            <Text style={{fontSize: 16, color: 'white'}}>{title}</Text>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity
            style={styles.closebtn}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{color: 'white', fontSize: 16}}>닫기</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const RenderCoupon1 = ({item}) => {
  return (
    <View style={styles.coubody1}>
      <View style={{justifyContent: 'space-evenly', height: '100%'}}>
        <Text
          style={{
            color: item.state ? '#E51A47' : '#777777',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          {item.couprice}원
        </Text>
        <Image
          source={
            item.state
              ? require('../images/couponDel.png')
              : require('../images/couponDelfalse.png')
          }></Image>
        <Text>최소주문금액 {item.mindeli}원</Text>
        <Text>
          {item.startdate} ~ {item.findate}
        </Text>
      </View>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../images/couline.png')}></Image>
        <Image
          source={
            item.state
              ? require('../images/coudownload.png')
              : require('../images/coudownfalse.png')
          }
          style={styles.downimg}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  coutitle: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 10,
  },
  coubody: {
    height: 150,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
  coubody1: {
    borderWidth: 0.5,
    height: 150,
    borderColor: '#F2F2F2',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    padding: 13,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 3,
    marginHorizontal: 2,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  downimg: {marginLeft: 30, marginRight: 10},
  closebtn: {
    backgroundColor: 'black',
    height: 45,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
