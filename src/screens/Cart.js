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

export default function Cart({navigation}) {
  const [checkedRadio, setCheckedRadio] = React.useState('first');
  const [cartdelModal, setCartdelModal] = React.useState(false);

  const toggleDelModal = () => {
    setCartdelModal(!cartdelModal);
  };

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
        <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            backgroundColor: 'white',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 18}}>김치찌개</Text>
            <TouchableOpacity onPress={toggleDelModal}>
              <Image source={require('../images/cartdelete.png')}></Image>
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
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.subcontents}>기본 : 7,000원</Text>
            <Text style={styles.subcontents}>맵기선택 : 기본맛(+0원)</Text>
            <Text style={styles.subcontents}>추가선택 : 김치추가(+500원)</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 18}}>9,000 원</Text>
            <View style={styles.plusminus}>
              <Image source={require('../images/minus.png')}></Image>
              <Text>1개</Text>
              <Image source={require('../images/plus.png')}></Image>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              marginVertical: 12,
            }}></View>
          <TouchableOpacity style={styles.addcart}>
            <Image source={require('../images/plus1.png')}></Image>
            <Text style={[style.text2, {color: '#E51A47'}]}>
              {' '}
              제품 추가하기{' '}
            </Text>
          </TouchableOpacity>
        </View>
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
