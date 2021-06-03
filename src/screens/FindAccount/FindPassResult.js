import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';

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

function FindPassResultScreen({navigation}) {
  return (
    <View style={{height: 290, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>새로운 비밀번호를 설정해 주세요</Text>
        </View>
        <View>
          <TextInput
            style={style.textInput}
            placeholder={'새 비밀번호 입력'}></TextInput>
          <Text style={style.passInfo}>
            영문, 숫자, 특수기호를 모두 포함해 8자 이상
          </Text>
          <TextInput
            style={style.textInput}
            placeholder={'새 비밀번호 한번 더 입력'}></TextInput>
        </View>
        <View style={{height: 30}}></View>
        <TouchableOpacity
          style={[style.btnSubmit, style.container0]}
          onPress={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{name: 'Login'}],
              }),
            )
          }>
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
