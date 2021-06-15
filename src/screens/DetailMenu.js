import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Button,
  SafeAreaView,
  Modal,
  Dimensions,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import style from '../style/style';
import {RadioButton, Checkbox} from 'react-native-paper';
import {Footer} from 'native-base';
import {Left, Right, Body} from 'native-base';
// import CheckBox from '@react-native-community/checkbox';
// import CheckboxList from 'rn-checkbox-list';

import axios from './../api/axios';

const win = Dimensions.get('window');
const ratio = win.width / 412; //541 is actual image width

const checkBoxContents = ['기본맛', '매운맛', '아주 매운맛'];

export default function DetailMenu({navigation, route}) {
  const {
    it_id,
    mnu_name,
    mnu_price,
    mnu_stock,
    mnu_pic,
    sl_sn,
    min_order_price,
  } = route.params;

  // 체크박스 컨트롤
  // const [checkedBox, setCheckedBox] = React.useState(new Set());
  const [checkedItems, setCheckedItems] = React.useState(new Set());
  const checkedItemHandler = (oit_sn, isChecked) => {
    if (isChecked) {
      checkedItems.add(oit_sn);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(oit_sn)) {
      checkedItems.delete(oit_sn);
      setCheckedItems(checkedItems);
    }
  };
  const [bChecked, setChecked] = React.useState(false);

  const [checkedRadio, setCheckedRadio] = React.useState(1);
  const [checkedBox1, setCheckedBox1] = React.useState(false);
  const [memuOption, setMenuOption] = React.useState([]);
  const [menuCount, setMenuCount] = React.useState(1);
  const [totalPrice, setTotalPrice] = React.useState(Number(mnu_price));

  // const [toggleCheckBox, setToggleCheckBox] = useState(false);

  React.useEffect(() => {
    let dataToSend = {it_id: it_id, sl_sn: sl_sn};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post(
        'shop_optinfo.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        setMenuOption(response.data.rowdata);

        console.log(response.data.rowdata);
        console.log('메뉴 옵션 통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        console.log('통신 실패');
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={[{justifyContent: 'space-between'}]}>
        <View top={0}>
          <View>
            <View>
              {mnu_pic !== '' ? (
                <Image
                  // source={require('../images/kimchidetail.png')}
                  source={{uri: mnu_pic}}
                  style={{
                    resizeMode: 'cover',
                    width: win.width,
                    height: 315 * ratio,
                  }}
                />
              ) : (
                <View
                  style={{
                    width: win.width,
                    height: 315 * ratio,
                  }}
                />
              )}
            </View>
            <View style={{left: 15, top: 15, position: 'absolute', right: 15}}>
              <View style={[styles.titlebox, {flexDirection: 'row'}]}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {mnu_name}
                </Text>
                {mnu_stock === 'Y' ? (
                  <View
                    style={{
                      backgroundColor: '#E51A47',
                      height: 20,
                      width: 37,
                      borderRadius: 3,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 5,
                    }}>
                    <Text style={{color: 'white'}}>대표</Text>
                  </View>
                ) : null}
              </View>
            </View>
          </View>
          <View style={{marginTop: 60}}>
            <View style={{marginHorizontal: 15}}>
              <View
                style={{
                  position: 'relative',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={style.text2}>기본금액</Text>
                <Text style={style.text2}>{mnu_price}원</Text>
              </View>
              <>
                {memuOption.map(item => {
                  return (
                    <View key={item.opt_sn}>
                      <View style={styles.underline}></View>
                      <Text style={styles.subtitle}>{item.opt_name}</Text>
                      {item.opt_item.map(option => {
                        return (
                          <View style={styles.radioBox} key={option.oit_sn}>
                            <View
                              style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}>
                              {item.opt_type === 'radio' ? (
                                <RadioButton.Android
                                  color="#E51A47"
                                  status={
                                    checkedRadio === option.oit_sn
                                      ? 'checked'
                                      : 'unchecked'
                                  }
                                  onPress={() => {
                                    setCheckedRadio(option.oit_sn);
                                    setTotalPrice(
                                      Number(mnu_price) +
                                        Number(option.oit_price),
                                    );
                                  }}
                                />
                              ) : (
                                <Checkbox.Android
                                  status={bChecked ? 'checked' : 'unchecked'}
                                  color="#E51A47"
                                  onPress={value => {
                                    // setCheckedBox(!checkedBox);
                                    // checkHandler(value);
                                  }}
                                />
                                // <CheckboxList
                                //   headerName={option.oit_name}
                                //   listItems={option}
                                //   theme="#FFFFFF"
                                //   onChange={({ids, items}) =>
                                //     console.log('My updated list :: ', ids)
                                //   }
                                //   listItemStyle={{
                                //     borderBottomColor: '#eee',
                                //     borderBottomWidth: 1,
                                //   }}
                                //   checkboxProp={{boxType: 'square'}} // iOS (supported from v0.3.0)
                                // />
                              )}
                              <Text style={style.text2}>{option.oit_name}</Text>
                            </View>
                            <Text style={style.text2}>
                              +{option.oit_price}원
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  );
                })}
              </>
            </View>
            <View
              style={{
                height: 10,
                backgroundColor: '#F5F5F5',
                marginVertical: 20,
              }}></View>

            <View style={{marginHorizontal: 15}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
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
              </View>
              <View style={styles.underline}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={style.text2}>총 주문금액</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  {totalPrice * menuCount} 원
                </Text>
              </View>
              <View style={{alignItems: 'flex-end', marginTop: 10}}>
                <Text style={{color: '#777777'}}>
                  배달 최소 주문 금액 {min_order_price}원
                </Text>
              </View>
            </View>
            <View
              style={{
                height: 10,
                backgroundColor: '#F5F5F5',
                marginVertical: 20,
              }}></View>
          </View>
        </View>
      </ScrollView>
      {/* Footer */}
      <SafeAreaView
        style={{
          backgroundColor: '#E51A47',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}>
        <TouchableOpacity
          style={styles.footer}
          onPress={() => {
            totalPrice * menuCount >= min_order_price
              ? ShowSnackbar({text: '장바구니에 담겼습니다.'})
              : ShowSnackbar({text: '최소 주문 금액을 맞춰주세요.'});
          }}>
          <Text style={[style.text2, {color: 'white', fontWeight: 'bold'}]}>
            {menuCount}개 담기
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

export const ShowSnackbar = props => {
  Snackbar.show({
    text: props.text,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: '#FEEDEC',
    textColor: '#E51A47',
    // action: {
    //   text: '닫기',
    //   textColor: 'black',
    // },
  });
};

const styles = StyleSheet.create({
  titlebox: {
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
    top: 250,
  },
  subtitle: {fontSize: 18, fontWeight: 'bold', marginBottom: 20},
  underline: {height: 1, backgroundColor: '#E5E5E5', marginVertical: 20},
  radioBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    height: 50,
    backgroundColor: '#E51A47',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countstyle: {
    flexDirection: 'row',
    height: 45,
    width: 133,
    borderColor: '#E5E5E5',
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 6,
  },
});
