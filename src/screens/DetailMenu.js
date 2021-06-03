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
} from 'react-native';
import style from '../style/style';
import {RadioButton, Checkbox} from 'react-native-paper';
import {Footer} from 'native-base';
import {Left, Right, Body} from 'native-base';

const checkBoxContents = ['기본맛', '매운맛', '아주 매운맛'];

export default function DetailMenu({navigation}) {
  const [checkedRadio, setCheckedRadio] = React.useState('first');
  const [checkedBox, setCheckedBox] = React.useState(false);
  const [checkedBox1, setCheckedBox1] = React.useState(false);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{backgroundColor: 'white'}}
        contentContainerStyle={[{justifyContent: 'space-between'}]}>
        <View top={0}>
          <View>
            <View style={{}}>
              <Image
                source={require('../images/kimchidetail.png')}
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                }}></Image>
            </View>
            <View style={{left: 15, top: 15, position: 'absolute', right: 15}}>
              <View style={[styles.titlebox, {flexDirection: 'row'}]}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>김치찌개</Text>
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
                <Text style={style.text2}>7,000원</Text>
              </View>
              <View style={styles.underline}></View>
              <Text style={styles.subtitle}>맵기선택</Text>
              <View>
                <View style={styles.radioBox}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton.Android
                      color="#E51A47"
                      value="first"
                      status={
                        checkedRadio === 'first' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedRadio('first')}
                    />
                    <Text style={style.text2}>기본맛</Text>
                  </View>
                  <Text style={style.text2}>+0원</Text>
                </View>
                <View style={styles.radioBox}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton.Android
                      color="#E51A47"
                      value="second"
                      status={
                        checkedRadio === 'second' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedRadio('second')}
                    />
                    <Text style={style.text2}>매운맛</Text>
                  </View>
                  <Text style={style.text2}>+0원</Text>
                </View>
                <View style={styles.radioBox}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <RadioButton.Android
                      color="#E51A47"
                      value="third"
                      status={
                        checkedRadio === 'third' ? 'checked' : 'unchecked'
                      }
                      onPress={() => setCheckedRadio('third')}
                    />
                    <Text style={style.text2}>가장 매운맛</Text>
                  </View>
                  <Text style={style.text2}>+0원</Text>
                </View>
              </View>
              <View style={styles.underline}></View>
              <Text style={styles.subtitle}>추가 선택 (최대 1개)</Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => {
                  setCheckedBox(!checkedBox);
                }}>
                <Checkbox.Android
                  status={checkedBox ? 'checked' : 'unchecked'}
                  color="#E51A47"
                />
                <Text style={style.text2}>김치추가</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={() => {
                  setCheckedBox1(!checkedBox1);
                }}>
                <Checkbox.Android
                  status={checkedBox1 ? 'checked' : 'unchecked'}
                  color="#E51A47"
                />
                <Text style={style.text2}>고기추가</Text>
              </TouchableOpacity>
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
                <View
                  style={{
                    flexDirection: 'row',
                    height: 45,
                    width: 133,
                    borderColor: '#E5E5E5',
                    borderWidth: 0.5,
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderRadius: 6,
                  }}>
                  <Text style={{fontSize: 30, color: '#E5E5E5'}}>-</Text>
                  <Text style={style.text2}>1개</Text>
                  <Text style={{fontSize: 20}}>+</Text>
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
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>9,000 원</Text>
              </View>
              <View style={{alignItems: 'flex-end', marginTop: 10}}>
                <Text style={{color: '#777777'}}>
                  배달 최소 주문 금액 7,000원
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
        <TouchableOpacity style={styles.footer} onPress={() => {}}>
          <Text style={[style.text2, {color: 'white', fontWeight: 'bold'}]}>
            1개 담기
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

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
});
