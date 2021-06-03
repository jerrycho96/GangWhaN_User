import React from 'react';
import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import style from '../style/style';

function AddressInputScreen({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
        <View>
          <View style={style.inputGroup2}>
            <View
              style={
                ([style.inputGroup2],
                {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
              }>
              <View style={{flex: 1}}>
                <TextInput
                  style={style.textInput}
                  placeholder={'검색할 주소를 입력해주세요'}></TextInput>
              </View>
              <TouchableOpacity
                style={[
                  style.btnSubmit,
                  {
                    height: 45,
                    width: 101,
                    justifyContent: 'center',
                    marginLeft: 10,
                  },
                ]}>
                <View>
                  <Text style={{color: 'white', fontSize: 16}}>주소 검색</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={style.button3}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('./../images/gps_icon.png')}></Image>
                <Text style={{color: '#E51A47', fontSize: 16, marginLeft: 5}}>
                  현위치로 주소 지정
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.inputGroup2}>
            <View style={{alignItems: 'center', marginBottom: 8}}>
              <TextInput style={style.textInput}>
                인천 강화군 강화읍 갑릉길 3
              </TextInput>
            </View>
          </View>
          <View style={style.inputGroup2}>
            <View style={{alignItems: 'center', marginBottom: 8}}>
              <TextInput
                style={style.textInput}
                placeholder={'상세 주소를 입력해주세요'}></TextInput>
            </View>
            <Image
              source={require('./../images/map.png')}
              style={{width: '100%', resizeMode: 'contain'}}></Image>
          </View>
        </View>
        <View style={{marginVertical: 15}}>
          <TouchableOpacity
            style={[style.btnSubmit, style.container0]}
            onPress={() => {}}>
            <Text style={[style.btnSubmitTxt, {fontSize: 16}]}>적용</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 16, marginBottom: 10},
  text1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
});
export default AddressInputScreen;
