import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
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

function FindIdResultScreen({navigation}) {
  return (
    <View style={{height: 280, backgroundColor: 'white'}}>
      <View style={{padding: 15}}>
        <View style={{paddingTop: 10, paddingBottom: 20}}>
          <Text style={style.subtitle}>가입하신 계정 정보입니다</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            <Text style={styles.resultButton}>아이디</Text>
            <Text style={style.text2}>abc12345</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.resultButton}>가입일</Text>
            <Text style={style.text2}>2020-01-01</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.passButton}
          onPress={() => navigation.navigate('FindPass')}>
          <Text style={[style.btnSubmitTxt]}>비밀번호 찾기</Text>
        </TouchableOpacity>
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
          <Text style={[style.btnSubmitTxt]}>로그인 화면으로 이동</Text>
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

export default FindIdResultScreen;
