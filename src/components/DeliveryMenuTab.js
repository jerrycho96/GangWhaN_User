import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import Modal from 'react-native-modal';

import style from '../style/style';
import CreateDeliveryMenuList from './CreateDeliveryMenuList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();
const imgDatas = [
  {
    id: 1,
    img: require('./../images/pic1.png'),
  },
  {
    id: 2,
    img: require('./../images/pic2.png'),
  },
  {
    id: 3,
    img: require('./../images/pic3.png'),
  },
  {
    id: 4,
    img: require('./../images/pic4.png'),
  },
];

const reviewData = {
  data1: [
    {
      key: '0',
      name: '달달무슨달',
      contents: '김치찌개 강추 !!',
      date: '2021-02-02',
      img1: require('./../images/listitemimg.png'),
      adminreview: {
        review: '소중한 리뷰 감사합니다.^^',
      },
    },
    {
      key: '1',
      name: '홍길동',
      contents: '김치찌개 강추 !!',
      date: '2021-01-02',
    },
  ],
  data2: [
    {
      key: '0',
      name: '강화김치찌개',
      contents: '김치찌개 강추 !!',
      date: '2021-02-02',
    },
  ],
};

export default function DeliveryMenuTab() {
  return (
    <View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#E51A47',
          inactiveTintColor: '#777777',
          scrollEnabled: false,
          indicatorStyle: {backgroundColor: '#E51A47'},
          labelStyle: {fontWeight: 'bold', fontSize: 16},
        }}>
        <Tab.Screen
          name="DetailDeliveryMenuTab1"
          component={DetailDeliveryMenuTab1}
          options={{tabBarLabel: '메뉴'}}
        />
        <Tab.Screen
          name="DetailDeliveryMenuTab2"
          component={DetailDeliveryMenuTab2}
          options={{tabBarLabel: '매장정보'}}
        />
        <Tab.Screen
          name="DetailDeliveryMenuTab3"
          component={DetailDeliveryMenuTab3}
          options={{tabBarLabel: '리뷰'}}
        />
      </Tab.Navigator>
    </View>
  );
}

function DetailDeliveryMenuTab1() {
  return (
    <View>
      <CreateDeliveryMenuList></CreateDeliveryMenuList>
    </View>
  );
}

function DetailDeliveryMenuTab2() {
  const [imgData, setImgData] = React.useState(imgDatas);
  const [imageModal, setImageModal] = React.useState(false);

  const toggleImageModal = () => {
    setImageModal(!imageModal);
  };
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            height: 50,
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 0.5,
            width: '100%',
            paddingHorizontal: 15,
          }}>
          <Text style={{fontSize: 18}}>가게소개</Text>
        </View>
        <View style={{paddingHorizontal: 15}}>
          <FlatList
            data={imgData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity onPress={toggleImageModal}>
                  <Image
                    source={item.img}
                    style={[
                      styles.img,
                      {width: windowWidth / 2.22, height: windowWidth / 2.22},
                    ]}></Image>

                  <Modal isVisible={imageModal}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image source={item.img}></Image>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          marginTop: 25,
                        }}>
                        <TouchableOpacity
                          style={styles.modalCancel}
                          onPress={toggleImageModal}>
                          <Text style={styles.modalBtnFont}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOk}>
                          <Text style={styles.modalBtnFont}>확인</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                </TouchableOpacity>
              </View>
            )}
            numColumns={2}></FlatList>
        </View>
        <View style={{padding: 15}}>
          <Text style={{fontSize: 16}}>오늘도 저희 이차돌창원중동점 ~~~~~</Text>
        </View>
        <View style={{width: '100%', paddingHorizontal: 15}}>
          <Image
            source={require('../images/map.png')}
            style={{resizeMode: 'contain', width: '100%'}}></Image>
        </View>
        <View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              backgroundColor: '#F9F9F9',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 0.5,
              width: '100%',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 18}}>영업정보</Text>
          </View>
          <View>
            <View
              style={{
                padding: 15,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View style={{marginRight: 15}}>
                <Text style={styles.title}>운영시간</Text>
                <Text style={styles.title}>휴무일</Text>
                <Text style={styles.title}>전화번호</Text>
                <Text style={styles.title}>편의시설</Text>
              </View>
              <View style={{marginRight: 15}}>
                <Text style={styles.contents}>운영시간</Text>
                <Text style={styles.contents}>휴무일</Text>
                <Text style={styles.contents}>전화번호</Text>
                <Text style={styles.contents}>편의시설</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 50,
              justifyContent: 'center',
              backgroundColor: '#F9F9F9',
              borderBottomColor: '#E5E5E5',
              borderBottomWidth: 0.5,
              width: '100%',
              paddingHorizontal: 15,
            }}>
            <Text style={{fontSize: 18}}>안내 및 혜택</Text>
          </View>
          <View>
            <View
              style={{
                padding: 15,
                backgroundColor: 'white',
                flexDirection: 'row',
              }}>
              <View style={{marginRight: 15}}>
                <Text style={styles.contents}>안내</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
function DetailDeliveryMenuTab3() {
  return (
    <View>
      <FlatList
        data={reviewData.data1}
        renderItem={RenderReviewList}
        keyExtractor={item => item.key}></FlatList>
    </View>
  );
}

const RenderReviewList = ({item}) => {
  return (
    <View style={{padding: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.title, {marginRight: 10}]}>{item.name}</Text>
        <Text style={{color: '#777777'}}>{item.date}</Text>
      </View>
      <View>
        <Image source={require('../images/stars.png')}></Image>
      </View>
      <View>
        <Text style={[style.text2, {marginVertical: 10}]}>{item.contents}</Text>
      </View>
      {item.img}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Image source={item.img1} style={{width: 118, height: 118}}></Image>
        <Image source={item.img1} style={{width: 118, height: 118}}></Image>
        <Image source={item.img1} style={{width: 118, height: 118}}></Image>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          backgroundColor: '#F9F9F9',
          borderColor: '#E5E5E5',
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 10,
        }}>
        <Image source={require('../images/adminreviewicon.png')}></Image>
        <View style={{marginLeft: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.title, {marginRight: 10}]}>강화김치찌개</Text>
            <Text style={{color: '#777777'}}>2021.0.1.02</Text>
          </View>
          <Text style={style.text2}>소중한 리뷰 감사합니다</Text>
        </View>
      </View>
      <View style={{height: 20}}></View>
      <View style={{height: 1, backgroundColor: '#E5E5E5'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {marginBottom: 10, fontSize: 16, fontWeight: 'bold'},
  contents: {marginRight: 20, marginBottom: 10, fontSize: 16},
  img: {resizeMode: 'cover', marginRight: 10, marginBottom: 10},
});
