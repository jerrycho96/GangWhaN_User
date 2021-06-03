import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import style from '../style/style';
import DeliveryMenuTab from './DeliveryMenuTab';

const Tab = createMaterialTopTabNavigator();

export default function DeliveryOrderTab() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#E51A47',
        inactiveTintColor: '#777777',
        scrollEnabled: false,
        indicatorStyle: {backgroundColor: '#E51A47'},
        labelStyle: {fontWeight: 'bold', fontSize: 16},
      }}>
      <Tab.Screen
        name="DetailDeliverOrderTab1"
        component={DetailDeliveryOrderTab1}
        options={{tabBarLabel: '배달주문'}}
      />
      <Tab.Screen
        name="DetailDeliverOrderTab2"
        component={DetailDeliveryOrderTab2}
        options={{tabBarLabel: '포장/방문 주문'}}
      />
    </Tab.Navigator>
  );
}

function DetailDeliveryOrderTab1() {
  return (
    <View>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>최소주문금액</Text>
          <Text style={style.text2}>10,000 원</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.title, {marginRight: 48}]}>배달시간</Text>
          <Text style={style.text2}>10,000 원</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.title, {marginRight: 48}]}>배달비용</Text>
          <Text style={style.text2}>10,000 원</Text>
        </View>
      </View>
      <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
      {/* <DeliveryMenuTab></DeliveryMenuTab> */}
    </View>
  );
}

function DetailDeliveryOrderTab2() {
  return (
    <View>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.title}>최소주문금액</Text>
          <Text style={style.text2}>10,000 원</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.title, {marginRight: 48}]}>조리시간</Text>
          <Text style={style.text2}>10,000 원</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.title, {marginRight: 48}]}>위치안내</Text>
          <Text style={style.text2}>10,000 원</Text>
        </View>
        <View>
          <Image
            source={require('../images/map.png')}
            style={{resizeMode: 'contain', width: '100%'}}></Image>
        </View>
      </View>
      <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
      {/* <DeliveryMenuTab></DeliveryMenuTab> */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {marginRight: 20, marginBottom: 10, fontSize: 16, fontWeight: 'bold'},
});
