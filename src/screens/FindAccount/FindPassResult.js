import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import axios from '../../api/axios';
import {ShowSnackbar} from '../../components/BOOTSTRAP';

import style from '../../style/style';
import {BtnSubmit} from '../components/BOOTSTRAP';
import {navigate, resetRoot} from '../../navigation/RootNavigation';

// const FindButton = (props) => {
//     return (
//         <TouchableOpacity onPress={() => { }}>
//             <View style={style.findButton}>
//                 <Text style={style.text2}>{props.title}</Text>
//                 <Image source={require('./../images/top_back.png')}
//                     style={{ width: 15, height: 15, tintColor: '#000', resizeMode: 'contain' }}></Image>
//             </View>
//         </TouchableOpacity>
//     );
// }

function FindPassResultScreen({navigation, route}) {
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const {ID, PHONE} = route.params;
  console.log(ID, PHONE);

  // 회원가입
  const axiosPost = () => {
    if (!password) {
      ShowSnackbar({text: '비밀번호를 확인해주세요'});
      return;
    }
    if (!confirmPassword) {
      ShowSnackbar({text: '비밀번호를 확인해주세요'});
      return;
    }
    if (confirmPassword !== password) {
      ShowSnackbar({text: '비밀번호 확인과 일치하지 않습니다'});
      return;
    }
    var dataToSend = {
      mb_id: ID,
      mb_password: password,
      mb_password_re: confirmPassword,
      mb_hp: PHONE,
    };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post(
        'pw_reset.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        if (response.data.message === 'success') {
          ShowSnackbar({text: '비밀번호 변경 성공.'});
          resetRoot('Login');
        } else if (response.data.message === 'Processing error(3)') {
          ShowSnackbar({text: '휴대폰 번호가 일치하지 않습니다.'});
        } else {
          setErrortext(response.data.message);
        }

        console.log(response.data.message);
        // console.log(response);
        console.log('통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        ShowSnackbar({
          text: '비밀번호 변경 오류',
        });
        console.log('통신 실패');
      });
  };
  return (
    <View style={{height: 290, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>새로운 비밀번호를 설정해 주세요</Text>
        </View>
        <View>
          <TextInput
            style={style.textInput}
            placeholder={'새 비밀번호 입력'}
            onChangeText={value => {
              setPassword(value);
            }}></TextInput>
          <Text style={style.passInfo}>
            영문, 숫자, 특수기호를 모두 포함해 8자 이상
          </Text>
          <TextInput
            style={style.textInput}
            placeholder={'새 비밀번호 한번 더 입력'}
            onChangeText={value => {
              setConfirmPassword(value);
            }}></TextInput>
        </View>
        <View style={{height: 30}}></View>
        <TouchableOpacity
          style={[style.btnSubmit, style.container0]}
          onPress={() => axiosPost()}>
          <Text style={[style.btnSubmitTxt]}>비밀번호 변경</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultButton: {
    color: '#E51A47',
    borderRadius: 4,
    borderColor: '#E51A47',
    borderWidth: 1,
    padding: 2,
    marginRight: 10,
  },
  passButton: {
    borderRadius: 4,
    borderColor: '#000',
    backgroundColor: '#707070',
    height: 45,
    width: '100%',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
});

export default FindPassResultScreen;
