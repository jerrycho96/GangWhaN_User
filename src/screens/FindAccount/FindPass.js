import React from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';

import style from '../../style/style';
import {BtnSubmit} from '../components/BOOTSTRAP';

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
  return (
    <View style={{height: 140, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>비밀번호를 찾습니다</Text>
        </View>
        <TextInput
          style={style.textInput}
          placeholder={'아이디를 입력해주세요'}></TextInput>
        <TouchableOpacity
          style={[
            style.btnSubmit,
            {marginTop: 10, justifyContent: 'center', alignItems: 'center'},
          ]}
          onPress={() => navigation.navigate('FindPassPhoneSign')}>
          <Text style={[style.btnSubmitTxt]}>휴대폰 인증</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FindPassScreen;
