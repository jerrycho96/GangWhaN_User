import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {IconButton, Colors} from 'react-native-paper';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';

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
import {Button} from 'native-base';
import SpecialFoodScreen from './src/screens/SpecialFood';
import DeliveryListScreen from './src/screens/DeliveryList';
import DeliVeryDetailScreen from './src/screens/DeliveryDetail';
import CreateDeliveryList from './src/components/CreateDeliveryList';
import DeliveryMenuTab from './src/components/DeliveryMenuTab';
import DeliveryOrderTab from './src/components/DeliveryOrderTab';
import WriteReviewScreen from './src/screens/WriteReview';
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
import {
  navigate,
  navigationRef,
  resetRoot,
} from './src/navigation/RootNavigation';
import MyCoupon from './src/screens/MyMenu/MyCoupon';
import Test from './src/screens/Test';
import MyHeartList from './src/screens/MyMenu/MyHeartList';
import MyReview from './src/screens/MyMenu/MyReview';
import ServiceCenter from './src/screens/MyMenu/ServiceCenter';
import Notice from './src/screens/MyMenu/Notice';
import NoticeView from './src/screens/MyMenu/NoticeView';
import Questions from './src/screens/MyMenu/Questions';
import CreateDeliveryMenuList from './src/components/CreateDeliveryMenuList';
import QuestionsView from './src/screens/MyMenu/QuestionsView';
import FAQ from './src/screens/MyMenu/FAQ';
import WriteReview1 from './src/screens/WriteReview1';
import SplashScreen1 from './src/screens/SplashScreen';
import AdultModal from './src/components/AdultModal';

const Stack = createStackNavigator();
const ModalStack = createStackNavigator();

function App({navigation}) {
  const [cartalldelModal, setCartalldelModal] = React.useState(false);

  const toggleAllDelModal = () => {
    setCartalldelModal(!cartalldelModal);
  };

  useEffect(() => {
    setTimeout(() => {
      resetRoot('Login');
    }, 2000);
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
          name="CreateDeliveryMenuList"
          options={{headerShown: true}}
          component={CreateDeliveryMenuList}
        />
        <Stack.Screen
          name="FindAccount"
          component={FindAccountScreen}
          options={{headerTitle: '?????? ??????'}}
        />
        <Stack.Screen
          name="FindId"
          component={FindIdScreen}
          options={{headerTitle: '????????? ??????'}}
        />
        <Stack.Screen
          name="FindIdPhoneSign"
          component={FindIdPhoneSignScreen}
          options={{headerTitle: '????????? ??????'}}
        />
        <Stack.Screen
          name="FindIdResult"
          component={FindIdResultScreen}
          options={{headerTitle: '????????? ??????'}}
        />
        <Stack.Screen
          name="RegisterInput"
          component={RegisterInputScreen}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="RegisterSuccess"
          component={RegisterSuccessScreen}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{headerTitle: '?????????'}}
        />
        <Stack.Screen
          name="FindPass"
          component={FindPassScreen}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="FindPassPhoneSign"
          component={FindPassPhoneSignScreen}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="FindPassResult"
          component={FindPassResultScreen}
          options={{headerTitle: '???????????? ??????'}}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddressInput"
          component={AddressInputScreen}
          options={{headerTitle: '?????? ?????? ??????'}}
        />
        <Stack.Screen
          name="MyOrderList"
          component={MyOrderList}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="MyOrderDetail"
          component={MyOrderDetail}
          options={{headerTitle: '?????? ?????? ??????'}}
        />
        <Stack.Screen
          name="MyHeartList"
          component={MyHeartList}
          options={{headerTitle: '??? ??????'}}
        />
        <Stack.Screen
          name="MyReview"
          component={MyReview}
          options={{headerTitle: '?????? ????????? ??????'}}
        />
        <Stack.Screen
          name="QuestionsView"
          component={QuestionsView}
          options={{headerTitle: '1:1 ??????'}}
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
            headerTitle: '????????????',
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
            headerTitle: '?????????',
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
            headerTitle: '????????????',
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
          options={{headerTitle: '?????? ????????????'}}
        />
        <Stack.Screen
          name="DeliveryMenuTab"
          component={DeliveryMenuTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeliveryOrderTab"
          component={DeliveryOrderTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WriteReview1"
          component={WriteReview1}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="Coupon"
          component={CouponScreen}
          options={{headerTitle: '?????? ????????????'}}
        />
        <Stack.Screen
          name="OrderDeliOnline"
          component={OrderDeliOnline}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="OrderDeliOffline"
          component={OrderDeliOffline}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSuccess}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="QuickDelivery"
          component={QuickDelivery}
          options={{headerTitle: '?????????'}}
        />
        <Stack.Screen
          name="QuickOrder"
          component={QuickOrder}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="QuickOrderSuccess"
          component={QuickOrderSuccess}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="MyMenuHome"
          component={MyMenuHome}
          options={{headerTitle: 'MY??????'}}
        />
        <Stack.Screen
          name="MyCoupon"
          component={MyCoupon}
          options={{headerTitle: '??? ?????????'}}
        />
        <Stack.Screen
          name="ServiceCenter"
          component={ServiceCenter}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="Notice"
          component={Notice}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="NoticeView"
          component={NoticeView}
          options={{headerTitle: '????????????'}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTitle: '????????????',
            headerRight: () => (
              <TouchableOpacity onPress={toggleAllDelModal}>
                <Text style={{marginRight: 15, fontSize: 16}}>????????????</Text>
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
                        ???????????? ?????? ?????? ??????
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
                          ??????????????? ???????????? ?????? ????????? ???????????????. {'\n'}
                          ?????????????????????????
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
                          <Text style={styles.modalBtnFont}>??????</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalOk}>
                          <Text style={styles.modalBtnFont}>??????</Text>
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
            headerTitle: '1:1 ??????',
            headerRight: () => (
              <TouchableOpacity>
                <Text style={{marginRight: 15, fontSize: 16}}>?????????</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="DetailMenu"
          component={DetailMenu}
          options={{
            headerTitle: '?????? ????????????',
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
