import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {navigate} from '../navigation/RootNavigation';

const RenderItem = ({item, LAT, LON}) => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <TouchableOpacity
        style={style.itemView}
        onPress={() => {
          navigate('DeliveryDetail', {
            sl_sn: item.sl_sn,
            min_order_price: item.min_order_price,
            sl_delv_time: item.sl_delv_time,
            delv_price: item.delv_price,
            sl_soge: item.sl_soge,
            sl_addr1: item.sl_addr1,
            sl_biztel: item.sl_biztel,
            shop_review_list: item.shop_review_list,
            sl_title: item.sl_title,
            LAT: LAT,
            LON: LON,
            review_avg: item.review_avg,
          });
        }}>
        <Image source={item.img} style={style.itemImg}></Image>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.itemName}>{item.sl_title} </Text>
            {item.new ? (
              <View
                style={{
                  backgroundColor: '#E51A47',
                  height: 20,
                  width: 37,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 5,
                }}>
                <Text style={{color: 'white'}}>신규</Text>
              </View>
            ) : null}
            {item.takeout ? (
              <View
                style={{
                  backgroundColor: '#28B766',
                  height: 20,
                  width: 37,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>포장</Text>
              </View>
            ) : null}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 3,
            }}>
            <Image source={require('./../images/stars.png')} />
            <Text style={style.itemMsg}>{item.review_avg} </Text>
            <Text style={style.delPrice}> 배달비용 {item.delv_price}원</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginVertical: 3,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('./../images/time.png')} />
              <Text style={style.itemMsg}>{item.delTime}</Text>
            </View>

            <Text>{item.distance}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 0.7,
          borderColor: '#E5E5E5',
          marginVertical: 10,
        }}></View>
    </View>
  );
};

function CreateDeliveryList({shopList, ca_id}) {
  return (
    <View style={style.root}>
      <FlatList
        data={shopList}
        renderItem={({item}) => <RenderItem item={item} ca_id={ca_id} />}
        keyExtractor={item => item.sl_sn}></FlatList>
    </View>
  );
}
const style = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  itemView: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    margin: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  itemImg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemMsg: {
    marginLeft: 5,
  },
  delPrice: {
    color: '#777777',
  },
  newtakeout: {marginRight: 5},
});

export default CreateDeliveryList;
