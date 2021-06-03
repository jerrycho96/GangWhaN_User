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

import style from '../style/style';

export default function QuickDelivery({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={[{justifyContent: 'space-between'}]}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingTop: 15,
            backgroundColor: 'white',
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>배달상품</Text>
            <View style={{marginVertical: 10}}>
              <TextInput
                style={{
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  marginVertical: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="배달상품을 간략히 입력해주세요"></TextInput>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>무게</Text>
            <View style={{marginVertical: 10}}>
              <TextInput
                style={{
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  marginVertical: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="(선택) 무게를 kg 단위로 입력해주세요"></TextInput>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>출발지</Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <TextInput
                style={{
                  flex: 1,
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  marginVertical: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="검색할 주소를 입력해주세요"></TextInput>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: 101,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#E51A47',
                  borderRadius: 5,
                  marginLeft: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>주소 검색</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#E51A47',
                marginBottom: 20,
              }}>
              <Image source={require('../images/gps_icon.png')}></Image>
              <Text style={{fontSize: 16, color: '#E51A47'}}>
                {' '}
                현위치로 주소 지정
              </Text>
            </TouchableOpacity>

            <View>
              <View style={{marginBottom: 10}}>
                <TextInput
                  style={{
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#CCCCCC',
                    paddingHorizontal: 10,
                  }}>
                  인천 강화군 강화읍 갑릉길 3
                </TextInput>
              </View>
            </View>
            <View>
              <View style={{marginBottom: 10}}>
                <TextInput
                  style={{
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#CCCCCC',
                    paddingHorizontal: 10,
                  }}
                  placeholder="상세 주소를 입력해주세요"></TextInput>
              </View>
            </View>
            <View>
              <View style={{marginBottom: 5}}>
                <TextInput
                  style={{
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#CCCCCC',
                    paddingHorizontal: 10,
                  }}
                  placeholder="연락처를 입력해주세요"></TextInput>
              </View>
            </View>
            <View>
              <Image
                source={require('../images/map.png')}
                style={{resizeMode: 'cover', width: '100%'}}></Image>
            </View>
          </View>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
              도착지
            </Text>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
              }}>
              <TextInput
                style={{
                  flex: 1,
                  height: 45,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: '#CCCCCC',
                  marginVertical: 10,
                  paddingHorizontal: 10,
                }}
                placeholder="검색할 주소를 입력해주세요"></TextInput>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: 101,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#E51A47',
                  borderRadius: 5,
                  marginLeft: 10,
                }}>
                <Text style={{color: 'white', fontSize: 16}}>주소 검색</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#E51A47',
                marginBottom: 20,
              }}>
              <Image
                source={require('../images/gps_icon.png')}
                style={{resizeMode: 'cover'}}></Image>
              <Text style={{fontSize: 16, color: '#E51A47'}}>
                {' '}
                현위치로 주소 지정
              </Text>
            </TouchableOpacity>

            <View>
              <View style={{marginBottom: 10}}>
                <TextInput
                  style={{
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#CCCCCC',
                    paddingHorizontal: 10,
                  }}>
                  인천 강화군 강화읍 갑릉길 3
                </TextInput>
              </View>
            </View>
            <View>
              <View style={{marginBottom: 10}}>
                <TextInput
                  style={{
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#CCCCCC',
                    paddingHorizontal: 10,
                  }}
                  placeholder="상세 주소를 입력해주세요"></TextInput>
              </View>
            </View>
            <View>
              <View style={{marginBottom: 5}}>
                <TextInput
                  style={{
                    height: 45,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#CCCCCC',
                    paddingHorizontal: 10,
                  }}
                  placeholder="연락처를 입력해주세요"></TextInput>
              </View>
            </View>
            <View marginBottom={10}>
              <Image
                source={require('../images/map.png')}
                style={{resizeMode: 'cover', width: '100%'}}></Image>
            </View>
          </View>
        </View>
        <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>

        <View style={{backgroundColor: 'white'}}>
          <SafeAreaView
            style={{
              backgroundColor: 'white',
            }}>
            <View style={styles.footer1}>
              <Text style={{fontSize: 18}}>총 주문금액</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>9,000</Text>
                <Text style={{fontSize: 20}}> 원</Text>
              </View>
            </View>
            <SafeAreaView>
              <TouchableOpacity
                style={styles.fotterbtn}
                onPress={() => {
                  navigation.navigate('QuickOrder');
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                  주문하기
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
        </View>
      </ScrollView>
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
