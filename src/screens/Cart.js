import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import style from '../style/style';
import {RadioButton} from 'react-native-paper';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';

import axios from './../api/axios';

export default function Cart({navigation}) {
  const [checkedRadio, setCheckedRadio] = React.useState('first');
  const [cartdelModal, setCartdelModal] = React.useState(false);

  const [menuCount, setMenuCount] = React.useState(1);

  const [cartList, setCartList] = React.useState([]);

  let MB_ID;
  let TOKEN;

  const toggleDelModal = () => {
    setCartdelModal(!cartdelModal);
  };
  React.useEffect(() => {
    AsyncStorage.getItem('userData', (err, result) => {
      const UserId = JSON.parse(result);
      console.log(UserId.userId);
      console.log(UserId.token);
      MB_ID = UserId.userId;
      TOKEN = UserId.token;
    });
    // let dataToSend = {mb_id: MB_ID, token: TOKEN};
    // 장바구니 목록 테스트용
    let dataToSend = {mb_id: 'admin', token: '2021060711085917'};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post('cart_list.php', formBody)
      .then(function (response) {
        setCartList(response.data.rowdata);
        console.log(response.data);
        console.log('장바구니 통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        console.log('통신 실패');
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={[{justifyContent: 'space-between'}]}>
        <View style={{padding: 15, backgroundColor: 'white'}}>
          <Text style={styles.subtitle}>매장명</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton.Android
                color="#E51A47"
                value="first"
                status={checkedRadio === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedRadio('first')}
              />
              <Text style={style.text2}>배달</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton.Android
                color="#E51A47"
                value="second"
                status={checkedRadio === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setCheckedRadio('second')}
              />
              <Text style={style.text2}>포장</Text>
            </View>
          </View>
        </View>
        {cartList.map(item => {
          return (
            <View>
              <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 18}}>{item.it_name}</Text>
                  <TouchableOpacity onPress={toggleDelModal}>
                    <Image source={require('../images/cartdelete.png')}></Image>
                  </TouchableOpacity>
                </View>

                <Text
                  style={[
                    styles.subcontents,
                    {marginTop: 10, marginBottom: 5},
                  ]}>
                  기본 : {item.it_price}원
                </Text>
                {item.option.map(option => {
                  return (
                    <View style={{marginBottom: 5}}>
                      <Text style={styles.subcontents}>
                        {option.io_name} : {option.ioi_name}(+{option.ioi_price}
                        원)
                      </Text>
                    </View>
                  );
                })}

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10,
                  }}>
                  <Text style={{fontSize: 18}}>9,000 원</Text>
                  <View style={styles.plusminus}>
                    <TouchableOpacity
                      onPress={() => {
                        menuCount >= 2 ? setMenuCount(menuCount - 1) : null;
                        console.log(menuCount);
                      }}>
                      <Image source={require('../images/minus.png')}></Image>
                    </TouchableOpacity>
                    <Text>{item.it_qty}개</Text>
                    <TouchableOpacity
                      onPress={() => {
                        setMenuCount(menuCount + 1);
                      }}>
                      <Image source={require('../images/plus.png')}></Image>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Text style={{fontSize: 18}}>수량</Text>
                <View style={styles.countstyle}>
                  <TouchableOpacity
                    onPress={() => {
                      menuCount >= 2 ? setMenuCount(menuCount - 1) : null;
                      console.log(menuCount);
                    }}>
                    <Text style={{fontSize: 30, color: '#777777'}}>-</Text>
                  </TouchableOpacity>
                  <Text style={style.text2}>{menuCount}개</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setMenuCount(menuCount + 1);
                    }}>
                    <Text style={{fontSize: 20}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View> */}
                <View
                  style={{
                    height: 1,
                    backgroundColor: '#E5E5E5',
                    marginVertical: 12,
                  }}></View>
                <TouchableOpacity style={styles.addcart}>
                  <Image source={require('../images/plus1.png')}></Image>
                  <Text style={[style.text2, {color: '#E51A47'}]}>
                    제품 추가하기
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
        }}>
        <View style={styles.footer}>
          <View style={styles.footer1}>
            <Text style={{fontSize: 18}}>총 주문금액</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>9,000</Text>
              <Text style={{fontSize: 20}}> 원</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.fotterbtn}
            onPress={() => {
              navigation.navigate('OrderDeliOnline');
            }}>
            <Text style={[style.text2, {color: 'white', fontWeight: 'bold'}]}>
              주문하기
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Modal isVisible={cartdelModal} onRequestClose={toggleDelModal}>
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
              장바구니 제품 삭제
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
                해당 제품이 장바구니에서 삭제됩니다. {'\n'}
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
                onPress={() => setCartdelModal(false)}>
                <Text style={styles.modalBtnFont}>취소</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalOk}>
                <Text style={styles.modalBtnFont}>확인</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  footer: {
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  footer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 0.5,
    borderTopColor: '#E5E5E5',
    marginBottom: 10,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  fotterbtn: {
    backgroundColor: '#E51A47',
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  plusminus: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    height: 45,
    width: 133,
    alignItems: 'center',
    borderRadius: 5,
  },
  addcart: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    backgroundColor: '#FEEDEC',
    borderRadius: 5,
  },
  subcontents: {color: '#777777', fontSize: 16},
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
