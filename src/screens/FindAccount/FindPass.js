import React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';

import style from '../../style/style';

import axios from '../../api/axios';
import {ShowSnackbar} from '../../components/BOOTSTRAP';

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

function FindPassScreen({navigation}) {
  const [inputId, setInputId] = React.useState('');

  const axiosPost = () => {
    let dataToSend = {mb_id: inputId};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post('check_id.php', formBody)
      .then(function (response) {
        if (!inputId) {
          ShowSnackbar({text: '아이디를 확인해주세요'});
          console.log(response.data.result);
          return;
        }
        if (response.data.result === '1') {
          ShowSnackbar({
            text: '휴대폰 인증을 진행해주세요.',
          });
          navigation.navigate('FindPassPhoneSign', {ID: inputId});
        } else if (response.data.result === '0') {
          ShowSnackbar({text: '존재하지 않는 아이디입니다.'});
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
    <View style={{height: 140, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>비밀번호를 찾습니다</Text>
        </View>
        <TextInput
          style={style.textInput}
          placeholder={'아이디를 입력해주세요'}
          onChangeText={value => {
            setInputId(value);
          }}></TextInput>
        <TouchableOpacity
          style={[
            style.btnSubmit,
            {marginTop: 10, justifyContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => axiosPost()}>
          <Text style={[style.btnSubmitTxt]}>휴대폰 인증</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FindPassScreen;
