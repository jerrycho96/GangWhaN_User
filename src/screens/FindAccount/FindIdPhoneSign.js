import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

import axios from '../../api/axios';
import {ShowSnackbar} from '../../components/BOOTSTRAP';
import {navigate, resetRoot} from '../../navigation/RootNavigation';

import style from '../../style/style';

function FindIdPhoneSignScreen({navigation}) {
  const [phoneNum, setPhoneNum] = React.useState('');
  const [singNum, setSignNum] = React.useState('');

  const axiosPost = () => {
    let dataToSend = {mb_hp: phoneNum};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post('id_find.php', formBody)
      .then(function (response) {
        if (!phoneNum) {
          ShowSnackbar({text: '휴대폰 번호를 확인해주세요'});
          console.log(response.data.result);
          return;
        }
        if (!singNum) {
          ShowSnackbar({text: '인증 번호를 확인해주세요'});
          console.log(response.data.result);
          return;
        }
        if (response.data.result === '0') {
          ShowSnackbar({
            text: '아이디를 찾았습니다.',
          });
          navigation.replace('FindIdResult', {FINDID: response.data.message});
          // resetRoot('FindIdResult', {FINDID: response.data.message});
        } else if (response.data.result === '1') {
          ShowSnackbar({text: '휴대폰 번호에 해당하는 계정이 없습니다.'});
        }

        console.log(response.data);
        // console.log(response);
        console.log('통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        ShowSnackbar({
          text: '통신 오류',
        });
        console.log('통신 실패');
      });
  };

  return (
    <View style={{height: 260, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>아이디를 찾습니다</Text>
        </View>
        <View>
          <View
            style={
              ([style.inputGroup2],
              {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
            }>
            <View style={{flex: 1}}>
              <TextInput
                style={style.textInput}
                placeholder={'핸드폰 번호'}
                onChangeText={value => {
                  setPhoneNum(value);
                }}></TextInput>
            </View>
            <TouchableOpacity style={style.button1}>
              <View>
                <Text style={{color: '#E51A47', fontSize: 16}}>
                  인증번호 발송
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={
              ([style.inputGroup2],
              {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
            }>
            <View style={{flex: 1}}>
              <TextInput
                style={style.textInput}
                placeholder={'인증번호 입력'}
                onChangeText={value => {
                  setSignNum(value);
                }}></TextInput>
            </View>
            <TouchableOpacity style={style.button1}>
              <View>
                <Text style={{color: '#E51A47', fontSize: 16}}>인증하기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 20}}></View>

        <TouchableOpacity
          style={[style.btnSubmit, style.container0]}
          onPress={() => axiosPost()}>
          <Text style={[style.btnSubmitTxt]}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FindIdPhoneSignScreen;
