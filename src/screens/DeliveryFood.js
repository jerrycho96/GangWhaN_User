import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import style from '../style/style';
import {TextInput} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import GridList from 'react-native-grid-list';
import {FlatGrid} from 'react-native-super-grid';

import {MainCircleButton} from './Main';

import axios from './../api/axios';
import {ShowSnackbar} from '../components/BOOTSTRAP';
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

export default function DeliveryFoodScreen({navigation, route}) {
  const {MAINID, LAT, LON} = route.params;
  const [categoryList, setCategoryList] = React.useState([]);

  const renderCategory = ({item, index}) => (
    <MainCircleButton
      title={item.ca_name}
      // source={require('./../images/food1-1.png')}
      source={
        item.cate_img === ''
          ? require('./../images/food1-1.png')
          : {uri: item.cate_img}
      }
      onPress={() => {
        navigate('DeliveryList', {
          LAT: LAT,
          LON: LON,
          ca_id: item.ca_id,
          categoryList: categoryList,
        });
      }}
    />
  );

  React.useEffect(() => {
    let dataToSend = {ca_id: MAINID};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post('category_list.php', formBody)
      .then(function (response) {
        // const bannerlist = response.data.rowdata.map((data, index) => {
        //   return data.bn_img;
        // });
        setCategoryList(response.data.rowdata);
        console.log(response.data.rowdata);

        // setBanner1(bannerlist);
        // console.log(bannerlisttest);
      })

      // 응답(실패)
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <PaperProvider theme={theme}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{margin: 15}}>
          <FlatList
            ListHeaderComponent={
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
            }
            ListFooterComponent={
              <View>
                <FlatGrid
                  itemDimension={70}
                  data={categoryList}
                  renderItem={renderCategory}
                  spacing={6}
                  style={{marginLeft: -10, marginRight: -10}}
                  additionalRowStyle={{
                    borderBottomWidth: 1,
                    borderColor: '#E5E5E5',
                    paddingBottom: 25,
                    paddingTop: 25,
                  }}
                />
                {/* <View>
                  <View style={{marginTop: 50}}>
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
                </View> */}
              </View>
            }
          />
        </View>
      </View>
    </PaperProvider>
  );
}
