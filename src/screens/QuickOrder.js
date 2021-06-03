import * as React from 'react';
import {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';

import style from '../style/style';
import {navigate, resetRoot} from '../navigation/RootNavigation';

export default function QuickOrder() {
  const [orderModal, setOrderModal] = React.useState(false);

  // 드롭다운
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState('online');
  const [items1, setItems1] = useState([
    {label: '온라인결제', value: 'online'},
    {label: '현장결제', value: 'offline'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState('onlinecard');
  const [items2, setItems2] = useState([
    {label: '카드결제', value: 'onlinecard'},
    {label: '실시간 계좌이체', value: 'onlineaccount'},
  ]);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState('offlinepay');
  const [items3, setItems3] = useState([
    {label: '만나서 현금 결제', value: 'offlinepay'},
    {label: '만나서 카드 결제', value: 'offlinecard'},
  ]);

  const toggleModal = () => {
    setOrderModal(!orderModal);
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={[{justifyContent: 'space-between'}]}
        nestedScrollEnabled={true}
        style={{zIndex: 1000}}>
        <View style={{padding: 15, backgroundColor: 'white'}}>
          <View>
            <Text style={styles.subtitle}>출발지</Text>
            <Text>인천 강화군 강화읍 갑룡길 3</Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, color: '#777777'}}>[지번 주소] </Text>
              <Text style={{fontSize: 16, color: '#777777'}}>
                인천광역시 강화군 강화읍 관청리 89-1
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.subtitle}>도착지</Text>
            <Text>인천 강화군 강화읍 갑룡길 3</Text>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 8,
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 16, color: '#777777'}}>[지번 주소] </Text>
              <Text style={{fontSize: 16, color: '#777777'}}>
                인천광역시 강화군 강화읍 관청리 89-1
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../images/warning.png')}></Image>
              <Text style={{color: '#E51A47'}}>
                {' '}
                주소가 맞는지 확인해주세요
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              marginVertical: 20,
            }}></View>
          <Text style={styles.subtitle}>연락처</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16}}>010-1234-5678</Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 70,
                borderWidth: 1,
                borderColor: '#E51A47',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
              }}>
              <Text style={{fontSize: 16, color: '#E51A47'}}>변경</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={require('../images/warning.png')}></Image>
            <Text style={{color: '#E51A47', marginVertical: 8}}>
              {' '}
              연락처가 맞는지 확인해주세요
            </Text>
          </View>
        </View>

        <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 15,
            backgroundColor: 'white',
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>요청사항</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={styles.subcontents}>라이더님에게</Text>
            <TextInput
              multiline={true}
              style={{
                height: 90,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: '#CCCCCC',
                marginVertical: 10,
                paddingHorizontal: 15,
                paddingTop: 15,
                paddingBottom: 15,
              }}></TextInput>
          </View>
        </View>
        <View
          style={{height: 10, backgroundColor: '#F5F5F5', zIndex: 2000}}></View>
        <View style={{backgroundColor: 'white', padding: 15, zIndex: 2000}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>결제방법</Text>
          <View style={{height: open2 || open3 ? 180 : null}}>
            <DropDownPicker
              dropDownDirection="BOTTOM"
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
              zIndex={5000}
              placeholder="온라인결제"
              searchable={false}
              dropDownContainerStyle={{
                borderColor: '#CCCCCC',
              }}
              style={{
                borderColor: '#CCCCCC',
                height: 45,
                marginVertical: 10,
                position: 'relative',
              }}
            />
            {value1 === 'online' ? (
              <View style={{}}>
                <DropDownPicker
                  dropDownDirection="BOTTOM"
                  open={open2}
                  value={value2}
                  items={items2}
                  setOpen={setOpen2}
                  setValue={setValue2}
                  setItems={setItems2}
                  zIndex={4000}
                  searchable={false}
                  dropDownContainerStyle={{borderColor: '#CCCCCC'}}
                  style={{borderColor: '#CCCCCC', height: 45}}
                />
              </View>
            ) : (
              <View style={{}}>
                <DropDownPicker
                  dropDownDirection="BOTTOM"
                  open={open3}
                  value={value3}
                  items={items3}
                  setOpen={setOpen3}
                  setValue={setValue3}
                  setItems={setItems3}
                  zIndex={4000}
                  zIndexInverse={1000}
                  searchable={false}
                  dropDownContainerStyle={{borderColor: '#CCCCCC'}}
                  style={{
                    borderColor: '#CCCCCC',
                    height: 45,
                  }}
                />
              </View>
            )}
          </View>
        </View>
        <View
          style={{
            height: 10,
            backgroundColor: '#F5F5F5',
            zIndex: -1000,
            zIndexInverse: -1000,
          }}></View>

        <View style={{padding: 15, backgroundColor: 'white', zIndex: -1000}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={style.text2}>쿠폰</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>2개 보유</Text>
              <Image source={require('../images/rightbtn.png')}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={style.text2}>엘포인트</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000P 사용</Text>
              <Image source={require('../images/rightbtn.png')}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={style.text2}>OK캐쉬백</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Image source={require('../images/rightbtn.png')}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: '#E5E5E5',
              marginVertical: 20,
            }}></View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={style.text2}>배 달 팁</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000원</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <Text style={style.text2}>주문금액</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000원</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <Text style={style.text2}>할인금액</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={style.text2}>1,000원</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView
        style={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: 'white',
        }}>
        <View style={styles.footer}>
          <View style={styles.footer1}>
            <Text style={{fontSize: 18}}>결제금액</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>9,000</Text>
              <Text style={{fontSize: 20}}> 원</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.fotterbtn}
            onPress={() => setOrderModal(true)}>
            <Text style={[style.text2, {color: 'white', fontWeight: 'bold'}]}>
              결제하기
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <OrderModal
        orderModal={orderModal}
        setOrderModal={setOrderModal}
        toggleModal={toggleModal}
      />
    </View>
  );
}

const OrderModal = ({orderModal, setOrderModal, toggleModal}) => {
  return (
    <Modal isVisible={orderModal} onRequestClose={toggleModal}>
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
          <Image source={require('../images/warningcircle.png')}></Image>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
            주문이 정상적으로 완료되지 않았습니다.
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 25,
            }}>
            <TouchableOpacity style={styles.modalCancel} onPress={toggleModal}>
              <Text style={styles.modalBtnFont}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOk}
              onPress={() => {
                setOrderModal(false);
                navigate('QuickOrderSuccess');
              }}>
              <Text style={styles.modalBtnFont}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

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
