import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

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

function FindPassPhoneSignScreen({navigation}) {
  return (
    <View style={{height: 260, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>비밀번호를 찾습니다</Text>
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
                placeholder={'핸드폰 번호'}></TextInput>
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
                placeholder={'인증번호 입력'}></TextInput>
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
          onPress={() => navigation.navigate('FindPassResult')}>
          <Text style={[style.btnSubmitTxt]}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FindPassPhoneSignScreen;
