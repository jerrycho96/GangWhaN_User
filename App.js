import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {IconButton, Colors} from 'react-native-paper';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';

import AsyncStorage from '@react-native-community/async-storage';
import Geolocation from '@react-native-community/geolocation';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import FindAccountScreen from './src/screens/FindAccount/FindAccount';
import FindIdScreen from './src/screens/FindAccount/FindId';
import FindIdPhoneSignScreen from './src/screens/FindAccount/FindIdPhoneSign';
import FindIdResultScreen from './src/screens/FindAccount/FindIdResult';
import RegisterInputScreen from './src/screens/RegisterInput';
import RegisterSuccessScreen from './src/screens/RegisterSuccess';
import FindPassScreen from './src/screens/FindAccount/FindPass';
import FindPassPhoneSignScreen from './src/screens/FindAccount/FindPassPhoneSign';
import FindPassResultScreen from './src/screens/FindAccount/FindPassResult';
import MainScreen from './src/screens/Main';
import AddressInputScreen from './src/screens/AddressInput';
import DeliveryFoodScreen from './src/screens/DeliveryFood';
import SpecialFoodScreen from './src/screens/SpecialFood';
import DeliveryListScreen from './src/screens/DeliveryList';
import DeliVeryDetailScreen from './src/screens/DeliveryDetail';
import CouponScreen from './src/screens/Coupon';
import DetailMenu from './src/screens/DetailMenu';
import Cart from './src/screens/Cart';
import OrderDeliOnline from './src/screens/OrderDeliOnline';
import OrderDeliOffline from './src/screens/OrderDeliOffline';
import OrderSuccess from './src/screens/OrderSuccess';
import QuickDelivery from './src/screens/QuickDelivery';
import QuickOrder from './src/screens/QuickOrder';
import QuickOrderSuccess from './src/screens/QuickOrderSuccess';
import MyMenuHome from './src/screens/MyMenu/MyMenuHome';
import MyOrderList from './src/screens/MyMenu/MyOrderList';
import MyOrderDetail from './src/screens/MyMenu/MyOrderDetail';
import {navigate, navigationRef} from './src/navigation/RootNavigation';
import MyCoupon from './src/screens/MyMenu/MyCoupon';
import MyHeartList from './src/screens/MyMenu/MyHeartList';
import MyReview from './src/screens/MyMenu/MyReview';
import ServiceCenter from './src/screens/MyMenu/ServiceCenter';
import Notice from './src/screens/MyMenu/Notice';
import NoticeView from './src/screens/MyMenu/NoticeView';
import Questions from './src/screens/MyMenu/Questions';
import QuestionsView from './src/screens/MyMenu/QuestionsView';
import FAQ from './src/screens/MyMenu/FAQ';
import WriteReview1 from './src/screens/WriteReview1';
import SplashScreen1 from './src/screens/SplashScreen';

const Stack = createStackNavigator();

function App() {
  const [cartalldelModal, setCartalldelModal] = React.useState(false);

  const toggleAllDelModal = () => {
    setCartalldelModal(!cartalldelModal);
  };

  let LAT;
  let LON;
  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        console.log(latitude, longitude);

        AsyncStorage.setItem(
          'userLocation',
          JSON.stringify({
            latitude: latitude,
            longitude: longitude,
          }),
        );
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    AsyncStorage.getItem('userLocation', (err, result) => {
      const UserLocation = JSON.parse(result);
      console.log(UserLocation.latitude);
      console.log(UserLocation.longitude);
      LAT = UserLocation.latitude;
      LON = UserLocation.longitude;
    });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,

          headerBackImage: () => (
            <IconButton
              icon={require('./src/images/back_button.png')}
              color="#000"
              size={18}
              style={{}}></IconButton>
          ),
        }}
        // initialRouteName="Login"
        // initialRouteName="Main"
        // initialRouteName="DeliveryDetail"
        initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={SplashScreen1}
        />

        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="FindAccount"
          component={FindAccountScreen}
          options={{headerTitle: '계정 찾기'}}
        />
        <Stack.Screen
          name="FindId"
          component={FindIdScreen}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindIdPhoneSign"
          component={FindIdPhoneSignScreen}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="FindIdResult"
          component={FindIdResultScreen}
          options={{headerTitle: '아이디 찾기'}}
        />
        <Stack.Screen
          name="RegisterInput"
          component={RegisterInputScreen}
          options={{headerTitle: '회원가입'}}
        />
        <Stack.Screen
          name="RegisterSuccess"
          component={RegisterSuccessScreen}
          options={{headerTitle: '회원가입 완료'}}
        />
        <Stack.Screen
          name="FindPass"
          component={FindPassScreen}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindPassPhoneSign"
          component={FindPassPhoneSignScreen}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="FindPassResult"
          component={FindPassResultScreen}
          options={{headerTitle: '비밀번호 찾기'}}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddressInput"
          component={AddressInputScreen}
          options={{headerTitle: '배송 주소 입력'}}
        />
        <Stack.Screen
          name="MyOrderList"
          component={MyOrderList}
          options={{headerTitle: '주문내역'}}
        />
        <Stack.Screen
          name="MyOrderDetail"
          component={MyOrderDetail}
          options={{headerTitle: '주문 상세 정보'}}
        />
        <Stack.Screen
          name="MyHeartList"
          component={MyHeartList}
          options={{headerTitle: '찜 목록'}}
        />
        <Stack.Screen
          name="MyReview"
          component={MyReview}
          options={{headerTitle: '내가 작성한 리뷰'}}
        />
        <Stack.Screen
          name="QuestionsView"
          component={QuestionsView}
          options={{headerTitle: '1:1 문의'}}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{headerTitle: 'FAQ'}}
        />
        <Stack.Screen
          name="DeliveryFood"
          component={DeliveryFoodScreen}
          options={{
            headerTitle: '음식배달',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('Cart');
                }}>
                <Image
                  source={require('./src/images/cart_icon1.png')}
                  style={{height: 20, width: 20, marginRight: 10}}></Image>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="SpecialFood"
          component={SpecialFoodScreen}
          options={{
            headerTitle: '특산물',
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('./src/images/cart_icon1.png')}
                  style={{height: 20, width: 20, marginRight: 10}}></Image>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DeliveryList"
          component={DeliveryListScreen}
          options={{
            headerTitle: '음식배달',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigate('Cart');
                }}>
                <Image
                  source={require('./src/images/cart_icon1.png')}
                  style={{height: 20, width: 20, marginRight: 10}}></Image>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DeliveryDetail"
          component={DeliVeryDetailScreen}
          options={{headerTitle: '매장 상세정보'}}
        />
        <Stack.Screen
          name="WriteReview1"
          component={WriteReview1}
          options={{headerTitle: '리뷰쓰기'}}
        />
        <Stack.Screen
          name="Coupon"
          component={CouponScreen}
          options={{headerTitle: '쿠폰 모아보기'}}
        />
        <Stack.Screen
          name="OrderDeliOnline"
          component={OrderDeliOnline}
          options={{headerTitle: '주문하기'}}
        />
        <Stack.Screen
          name="OrderDeliOffline"
          component={OrderDeliOffline}
          options={{headerTitle: '주문하기'}}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={{headerTitle: '주문완료'}}
        />
        <Stack.Screen
          name="QuickDelivery"
          component={QuickDelivery}
          options={{headerTitle: '퀵배달'}}
        />
        <Stack.Screen
          name="QuickOrder"
          component={QuickOrder}
          options={{headerTitle: '주문하기'}}
        />
        <Stack.Screen
          name="QuickOrderSuccess"
          component={QuickOrderSuccess}
          options={{headerTitle: '주문완료'}}
        />
        <Stack.Screen
          name="MyMenuHome"
          component={MyMenuHome}
          options={{headerTitle: 'MY메뉴'}}
        />
        <Stack.Screen
          name="MyCoupon"
          component={MyCoupon}
          options={{headerTitle: '내 쿠폰함'}}
        />
        <Stack.Screen
          name="ServiceCenter"
          component={ServiceCenter}
          options={{headerTitle: '고객센터'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerTitle: '공지사항'}}
        />
        <Stack.Screen
          name="NoticeView"
          component={NoticeView}
          options={{headerTitle: '공지사항'}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTitle: '장바구니',
            headerRight: () => (
              <TouchableOpacity onPress={toggleAllDelModal}>
                <Text style={{marginRight: 15, fontSize: 16}}>전체삭제</Text>
                <Modal isVisible={cartalldelModal}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: '100%',
                        padding: 20,
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        장바구니 제품 전체 삭제
                      </Text>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: '#E5E5E5',
                          marginVertical: 20,
                          width: '100%',
                        }}></View>
                      <View>
                        <Text style={{textAlign: 'center', fontSize: 16}}>
                          장바구니에 담겨있는 모든 제품이 삭제됩니다. {'\n'}
                          삭제하시겠습니까?
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '100%',
                          flexDirection: 'row',
                          justifyContent: 'space-around',
                          marginTop: 25,
                        }}>
                        <TouchableOpacity
                          style={styles.modalCancel}
                          onPress={toggleAllDelModal}>
                          <Text style={styles.modalBtnFont}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOk}>
                          <Text style={styles.modalBtnFont}>확인</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Questions"
          component={Questions}
          options={{
            headerTitle: '1:1 문의',
            headerRight: () => (
              <TouchableOpacity>
                <Text style={{marginRight: 15, fontSize: 16}}>글쓰기</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DetailMenu"
          component={DetailMenu}
          options={{
            headerTitle: '강화 김치찌개',
            headerRight: () => (
              <TouchableOpacity>
                <Image
                  source={require('./src/images/shareicon.png')}
                  style={{height: 20, width: 20, marginRight: 10}}></Image>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modalCancel: {
    backgroundColor: '#777777',
    width: '50%',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5,
  },
  modalOk: {
    backgroundColor: '#E51A47',
    width: '50%',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 5,
  },
  modalBtnFont: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});

export default App;
