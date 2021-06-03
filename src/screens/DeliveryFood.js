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
import {TextInput} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {MainCircleButton} from './Main';
import {navigate} from '../navigation/RootNavigation';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: '#f1c40f',
  },
};

export default function DeliveryFoodScreen({navigation}) {
  return (
    <PaperProvider theme={theme}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white'}}>
          <View style={{margin: 15}}>
            <View>
              <View style={{backgroundColor: 'white'}}>
                <TextInput
                  borderWidth={1}
                  borderColor="#CCCCCC"
                  underlineColor="white"
                  borderRadius={100}
                  width="100%"
                  style={{
                    width: '100%',
                    height: 45,
                    backgroundColor: 'white',
                    paddingHorizontal: 12,
                    marginBottom: 25,
                  }}
                  placeholder="매장명을 입력하세요"
                  placeholderTextColor="#AAAAAA"
                  right={
                    <TextInput.Icon
                      style={{backgroundColor: 'white'}}
                      name={require('./../images/search_icon.png')}
                      color={'#E51A47'}
                    />
                  }
                />
              </View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MainCircleButton
                    title="한식"
                    source={require('./../images/food1-1.png')}
                    onPress={() => {
                      navigation.navigate('DeliveryList');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="중식"
                    source={require('./../images/food1-2.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="일식/회"
                    source={require('./../images/food1-3.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="분식"
                    source={require('./../images/food1-4.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E5E5E5',
                  marginVertical: 20,
                }}></View>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MainCircleButton
                    title="양식"
                    source={require('./../images/food1-5.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="치킨/피자"
                    source={require('./../images/food1-6.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="탕/찜"
                    source={require('./../images/food1-7.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="족발/보쌈"
                    source={require('./../images/food1-8.png')}
                    onPress={() => {
                      navigate('DeliveryList');
                    }}></MainCircleButton>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E5E5E5',
                  marginVertical: 20,
                }}></View>

              <View style={{flexDirection: 'row'}}>
                <MainCircleButton
                  title="패스트푸드"
                  source={require('./../images/food1-9.png')}
                  onPress={() => {
                    navigate('DeliveryList');
                  }}></MainCircleButton>
                <View width={26}></View>
                <MainCircleButton
                  title="야식"
                  source={require('./../images/food1-10.png')}
                  onPress={() => {
                    navigate('DeliveryList');
                  }}></MainCircleButton>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
