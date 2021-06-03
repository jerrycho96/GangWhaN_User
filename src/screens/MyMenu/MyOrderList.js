import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import StepIndicator from 'react-native-step-indicator';
import {navigate} from '../../navigation/RootNavigation';

import style from '../../style/style';

const orderData = {
  data: [
    {
      ordernum: '12345678901231',
      name: '미미네 떡볶이 외 2건',
      paydate: '2020.04.15 10:17:52',
      payway: '신용카드',
      payprice: '17,200',
      orderstate: '주문완료',
      orderstateposition: 0,
    },
    {
      ordernum: '12345678901232',
      name: '미미네  2건',
      paydate: '2020.04.15 10:17:52',
      payway: '신용카드',
      payprice: '17,200',
      orderstate: '상품 준비 중',
      orderstateposition: 1,
    },
    {
      ordernum: '12345678901233',
      name: '미미네 떡볶이 ',
      paydate: '2020.04.15 10:17:52',
      payway: '신용카드',
      payprice: '17,200',
      orderstate: '배송 중',
      orderstateposition: 2,
    },
    {
      ordernum: '123456789012334',
      name: '미미네 떡볶이 ',
      paydate: '2020.04.15 10:17:52',
      payway: '신용카드',
      payprice: '17,200',
      orderstate: '배송 중',
      orderstateposition: 3,
    },
  ],
};

const labels = ['주문완료', '상품 준비 중', '배송 중', '배송완료'];

const customStyles = {
  stepIndicatorSize: 12,
  currentStepIndicatorSize: 12,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#E51A47',
  stepStrokeWidth: 0,
  stepStrokeFinishedColor: '#E51A47',
  stepStrokeUnFinishedColor: '#E5E5E5',
  separatorFinishedColor: '#E51A47',
  separatorUnFinishedColor: '#E5E5E5',
  stepIndicatorFinishedColor: '#E51A47',
  stepIndicatorUnFinishedColor: '#E5E5E5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: 'transparent',
  stepIndicatorLabelFinishedColor: 'transparent',
  stepIndicatorLabelUnFinishedColor: 'transparent',
  labelColor: 'black',
  labelSize: 14,
  currentStepLabelColor: '#E51A47',
  padding: 0,
  margin: 0,
};

export default function MyOrderList() {
  const [orderList, setOrderList] = useState(orderData.data);

  return (
    <View style={{flex: 1, padding: 15}}>
      <SafeAreaView>
        <FlatList
          style={{}}
          data={orderList}
          renderItem={RenderItem}
          keyExtractor={item => item.ordernum}></FlatList>
      </SafeAreaView>
    </View>
  );
}

const RenderItem = ({item}) => {
  return (
    <View
      style={{
        height: 330,
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        borderRadius: 5,
        marginBottom: 15,
        marginTop: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: -10,
        }}>
        <Text style={style.text2}>
          주문번호{'   '}
          {item.ordernum}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigate('MyOrderDetail', {
              ORDERNUM: item.ordernum,
              PAYDATE: item.paydate,
            });
          }}>
          <Image source={require('../../images/rightbtn.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={[style.underLine, {marginVertical: 10}]}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
          marginTop: 10,
        }}>
        <Text style={[style.text2, {fontWeight: '600', marginRight: 44}]}>
          상품명
        </Text>
        <Text style={style.text2}>{item.name}</Text>
      </View>
      <View style={styles.title}>
        <Text style={[style.text2, styles.title1]}>결제일시</Text>
        <Text style={style.text2}>{item.paydate}</Text>
      </View>
      <View style={styles.title}>
        <Text style={[style.text2, styles.title1]}>결제방법</Text>
        <Text style={style.text2}>{item.payway}</Text>
      </View>
      <View style={styles.title}>
        <Text style={[style.text2, styles.title1]}>결제금액</Text>
        <Text style={style.text2}>{item.payprice}</Text>
      </View>
      <View style={styles.title}>
        <Text style={[style.text2, styles.title1]}>주문상태</Text>
        <Text style={style.text2}>{item.orderstate}</Text>
      </View>
      <View
        style={{
          width: '100%',
          marginTop: 15,
          ...Platform.select({ios: {paddingTop: 10}}),
        }}>
        <StepIndicator
          customStyles={customStyles}
          currentPosition={item.orderstateposition}
          labels={labels}
          stepCount={4}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  title1: {fontWeight: '600', marginRight: 30},
});
