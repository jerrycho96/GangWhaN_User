import React, {useState} from 'react';
import {Text, Image, View, ScrollView, TouchableOpacity} from 'react-native';
import {Header, Left, Right} from 'native-base';
import style from '../style/style';
import {navigate} from '../navigation/RootNavigation';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';

const banner = [
  {key: 1, img: require('./../images/main_title.png')},
  {key: 2, img: require('./../images/main_title.png')},
  {key: 3, img: require('./../images/main_title.png')},
  {key: 3, img: require('./../images/main_title.png')},
  {key: 3, img: require('./../images/main_title.png')},
  {key: 3, img: require('./../images/main_title.png')},
  {key: 3, img: require('./../images/main_title.png')},
];

export const MainCircleButton = ({title, source, onPress}) => {
  return (
    <TouchableOpacity
      style={{alignItems: 'center', resizeMode: 'contain'}}
      onPress={onPress}>
      <Image source={source} style={{width: 70, height: 70}}></Image>
      <Text style={[style.text2, {marginTop: 10}]}>{title}</Text>
    </TouchableOpacity>
  );
};

function MainScreen({navigation}) {
  const [bannerState, setBannerState] = useState(0);
  const [pauseBtn, setPauseBtn] = useState(false);
  function twolength(n) {
    return (n < 10 ? '0' : '') + n;
  }
  return (
    <View style={{flex: 1}}>
      <Header
        iosBarStyle={'dark-content'}
        androidStatusBarColor="white"
        style={{height: 50, backgroundColor: 'white'}}>
        <Left>
          <Image
            source={require('./../images/appbar_icon.png')}
            style={{width: 63, height: 25, marginLeft: 10}}></Image>
        </Left>
        <Right>
          <TouchableOpacity
            onPress={() => {
              navigate('MyMenuHome');
            }}>
            <Image
              source={require('./../images/main_drawer.png')}
              style={{width: 20, height: 16, marginRight: 10}}></Image>
          </TouchableOpacity>
        </Right>
      </Header>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: 20,
          width: '100%',
        }}>
        {/* 배너 */}
        <View>
          <Swiper
            containerStyle={{height: 232}}
            autoplay={pauseBtn ? false : true}
            showsPagination={false}
            autoplayTimeout={2}
            paginationStyle={{backgroundColor: 'grey'}}
            onMomentumScrollEnd={(e, state, context, total) =>
              setBannerState(state.index + 1)
            }>
            {banner.map((item, index) => {
              return (
                <View key={index}>
                  <Image
                    source={item.img}
                    style={{resizeMode: 'cover', width: '100%', height: 232}}
                  />
                </View>
              );
            })}
          </Swiper>

          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 20,
              backgroundColor: 'rgba(0,0,0,.6)',
              height: 35,
              width: 105,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>
              {twolength(bannerState)}
            </Text>
            <Text style={{color: 'white'}}>/{twolength(banner.length)}</Text>
            <View
              style={{
                backgroundColor: 'white',
                height: 20,
                width: 1,
                marginHorizontal: 10,
              }}></View>
            <TouchableOpacity
              onPress={() => {
                setPauseBtn(!pauseBtn);
              }}>
              <Image
                source={require('../images/pause.png')}
                style={{marginLeft: 5}}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={{margin: 15}}>
            <View>
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 45,
                  borderRadius: 40,
                  borderColor: '#CCCCCC',
                  borderWidth: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 12,
                  marginBottom: 25,
                }}
                onPress={() => {
                  navigation.navigate('AddressInput');
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('./../images/address_left.png')}></Image>
                  <Text style={[style.text2, {paddingHorizontal: 10}]}>
                    인천 강화군 강화읍 미니산로 100
                  </Text>
                </View>
                <View>
                  <Image
                    source={require('./../images/address_right.png')}></Image>
                </View>
              </TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <MainCircleButton
                    title="음식배달"
                    source={require('./../images/main_circle1.png')}
                    onPress={() => {
                      navigate('DeliveryFood');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="카페/디저트"
                    source={require('./../images/main_circle2.png')}
                    onPress={() => {
                      navigate('DeliveryFood');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="퀵배달"
                    source={require('./../images/main_circle3.png')}
                    onPress={() => {
                      navigate('QuickDelivery');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="꽃/케이크"
                    source={require('./../images/main_circle4.png')}
                    onPress={() => {
                      navigate('DeliveryFood');
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
                    title="특산물"
                    source={require('./../images/main_circle5.png')}
                    onPress={() => {
                      navigation.navigate('SpecialFood');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="풍물시장"
                    source={require('./../images/main_circle6.png')}
                    onPress={() => {
                      navigate('DeliveryFood');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="농수산물"
                    source={require('./../images/main_circle7.png')}
                    onPress={() => {
                      navigate('DeliveryFood');
                    }}></MainCircleButton>
                  <MainCircleButton
                    title="정육점"
                    source={require('./../images/main_circle8.png')}
                    onPress={() => {
                      navigate('DeliveryFood');
                    }}></MainCircleButton>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#E5E5E5',
                  marginVertical: 20,
                }}></View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <MainCircleButton
                  title="직판장"
                  source={require('./../images/main_circle9.png')}
                  onPress={() => {
                    navigate('DeliveryFood');
                  }}></MainCircleButton>
                <TouchableOpacity
                  style={{alignItems: 'center', resizeMode: 'contain'}}
                  onPress={() => {
                    navigate('DeliveryFood');
                  }}>
                  <Image
                    source={require('./../images/main_circle10.png')}
                    style={{width: 83, height: 70}}></Image>
                  <Text style={[style.text2, {marginTop: 10}]}>
                    편의점/마트
                  </Text>
                </TouchableOpacity>
                <MainCircleButton
                  title="의약품"
                  source={require('./../images/main_circle11.png')}>
                  onPress=
                  {() => {
                    navigate('DeliveryFood');
                  }}
                </MainCircleButton>
                <MainCircleButton
                  title="기타상품"
                  source={require('./../images/main_circle12.png')}
                  onPress={() => {
                    navigate('DeliveryFood');
                  }}></MainCircleButton>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 13, color: '#555555'}}>이용약관</Text>
          <Text style={{color: '#CCCCCC'}}> | </Text>
          <Text style={{fontSize: 13, color: '#555555'}}>개인정보처리방침</Text>
          <Text style={{color: '#CCCCCC'}}> | </Text>
          <Text style={{fontSize: 13, color: '#555555'}}>
            위치기반 서비스약관
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 13, color: '#555555', fontWeight: 'bold'}}>
            오성패밀리
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#555555',
              textAlign: 'center',
              marginVertical: 5,
            }}>
            대표자: 김형석 사업자등록번호: 111-11-11111{'\n'}통신판매업신고번호:
            제1111-인천강화-0000호
          </Text>
          <Text style={{fontSize: 12, color: '#999999', textAlign: 'center'}}>
            강화N은 통신판매 중개자이며 판매 당사자가 아닙니다.{'\n'}따라서
            강화N은 상품의 거래정보 및 판매에 대한 책임을 지지 않습니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default MainScreen;
