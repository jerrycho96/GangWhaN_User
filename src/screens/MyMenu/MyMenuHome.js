import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import {navigate} from '../../navigation/RootNavigation';

import style from '../../style/style';

export default function MyMenuHome({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{backgroundColor: 'white'}}>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: '#E5E5E5',
            height: 280,
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 15,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 5,
            margin: 15,
          }}>
          <View style={{width: '100%'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../images/mymenuicon1.png')}
                style={{marginRight: 10}}></Image>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 20}}>안녕하세요, </Text>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>홍길동</Text>
                  <Text style={{fontSize: 20}}> 님</Text>
                </View>
                <View>
                  <Text style={{fontSize: 20}}>방문해주셔서 감사합니다</Text>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 10}}>
              <View
                style={{
                  height: 1,
                  backgroundColor: 'black',
                  marginVertical: 20,
                }}></View>
              <View style={{marginHorizontal: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{fontSize: 16}}>주문 건수</Text>
                  <Text style={{fontSize: 16}}>9,999 건</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{fontSize: 16}}>장바구니 상품 수</Text>
                  <Text style={{fontSize: 16}}>5 개</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16}}>찜한 업체</Text>
                  <Text style={{fontSize: 16}}>10 곳</Text>
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: 'black',
                  marginVertical: 20,
                }}></View>
            </View>
          </View>
        </View>
      </View>
      <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigation.navigate('MyOrderList');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon2.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>주문내역</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 1, backgroundColor: '#EEEEEE'}}></View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('MyCoupon');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon3.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>내 쿠폰함</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 1, backgroundColor: '#EEEEEE'}}></View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('Cart');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon4.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>장바구니</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 1, backgroundColor: '#EEEEEE'}}></View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('MyHeartList');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon5.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>찜 목록</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 1, backgroundColor: '#EEEEEE'}}></View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('MyReview');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon6.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>
              내가 작성한 리뷰
            </Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          onPress={() => {
            navigate('ServiceCenter');
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon7.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>고객센터</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 1, backgroundColor: '#EEEEEE'}}></View>

      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon8.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>회원정보 수정</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: 1, backgroundColor: '#EEEEEE'}}></View>

      <View style={{backgroundColor: 'white', padding: 15}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../../images/mymenuicon9.png')}></Image>
            <Text style={[style.text2, {marginLeft: 10}]}>로그아웃</Text>
          </View>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <SafeAreaView
        style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
          margin: 20,
          height: 70,
        }}>
        <Text style={{fontWeight: 'bold'}}>(주) 오성패밀리</Text>
        <Text style={{color: '#555555'}}>
          대표자: 김형석{'   '}사업자등록번호: 111-11-11111
        </Text>
        <Text style={{color: '#555555'}}>
          통신판매업신고번호: 제1111-인천강화-0000호
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}
