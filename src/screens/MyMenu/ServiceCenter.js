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
import {navigate} from '../../navigation/RootNavigation';
import style from '../../style/style';

export default function ServiceCenter() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
          }}
          onPress={() => {
            navigate('Notice');
          }}>
          <Text style={style.text2}>공지사항</Text>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
        <View style={{backgroundColor: '#EEEEEE', height: 1}}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
          }}
          onPress={() => {
            navigate('Questions');
          }}>
          <Text style={style.text2}>1:1문의</Text>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
        <View style={{backgroundColor: '#EEEEEE', height: 1}}></View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
          }}
          onPress={() => {
            navigate('FAQ');
          }}>
          <Text style={style.text2}>FAQ</Text>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}
