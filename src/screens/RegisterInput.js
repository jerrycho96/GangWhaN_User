import React, {Component, useEffect, useState, useRef, createRef} from 'react';

import {
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import axios from './../api/axios';
import {ShowSnackbar} from '../components/BOOTSTRAP';

import style from '../style/style';
import {resetRoot} from '../navigation/RootNavigation';

function RegisterInputScreen(props, {navigation}) {
  const [userId, setUserId] = useState('');
  const [userPwd, setUserPwd] = useState('');
  const [userConfirmPwd, setUserConfirmPwd] = useState('');
  const [userName, setUserName] = useState('');
  const [userHp, setUserHp] = useState('');
  const [userNick, setUserNick] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userBirth, setUserBirth] = useState('');
  const [userLevel, setUserLevel] = useState('2');
  const [socialState, setSocialState] = useState('C');
  const [errortext, setErrortext] = useState('');

  const idCheck = () => {
    let dataToSend = {mb_id: userId};
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
        if (!userId) {
          ShowSnackbar({text: '아이디를 확인해주세요'});
          console.log(response.data.result);
          return;
        }
        if (response.data.result === '1') {
          ShowSnackbar({
            text: '사용중인 아이디 입니다.',
          });
        } else if (response.data.result === '0') {
          ShowSnackbar({text: '사용가능한 아이디 입니다.'});
        }
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

  // 회원가입
  const axiosPost = () => {
    if (!userId) {
      ShowSnackbar({text: '아이디를 확인해주세요'});
      return;
    }
    if (!userPwd) {
      ShowSnackbar({text: '비밀번호를 확인해주세요'});
      return;
    }
    if (!userConfirmPwd) {
      ShowSnackbar({text: '비밀번호를 확인해주세요'});
      return;
    }
    if (userConfirmPwd !== userPwd) {
      ShowSnackbar({text: '비밀번호 확인과 일치하지 않습니다'});
      return;
    }
    if (!userHp) {
      ShowSnackbar({text: '휴대폰 번호를 확인해주세요'});
      return;
    }
    if (!userNick) {
      ShowSnackbar({text: '닉네임을 확인해주세요'});
      return;
    }
    if (!userName) {
      ShowSnackbar({text: '이름을 확인해주세요'});
      return;
    }
    var dataToSend = {
      mb_id: userId,
      mb_password: userPwd,
      mb_password_re: userConfirmPwd,
      mb_name: userName,
      mb_hp: userHp,
      mb_nick: userNick,
      mb_email: userEmail,
      mb_3: '19',
      token: null,
      mb_birth: '1981-12-12',
      mb_level: '2',
      mb_7: 'C',
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
        'member_insert.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        if (response.data.result === '0') {
          console.log('회원가입 성공');
          resetRoot('RegisterSuccess');
        } else if (
          response.data.message === 'Processing error(이미사용중인 아이디'
        ) {
          ShowSnackbar({text: '이미 사용중인 아이디 입니다.'});
        } else if (
          response.data.message === 'Processing error(이미사용중인 휴대전화)'
        ) {
          ShowSnackbar({text: '이미 사용중인 휴대폰 번호 입니다.'});
        } else if (
          response.data.message === 'Processing error(이미사용중인닉네임)'
        ) {
          ShowSnackbar({text: '이미 사용중인 닉네임 입니다.'});
        } else {
          setErrortext(response.data.message);
        }

        // console.log(response);
        console.log('통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        ShowSnackbar({
          text: '회원가입 오류',
        });
        console.log('통신 실패');
      });
  };

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="always">
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 20,
            backgroundColor: 'white',
          }}>
          <View>
            <View style={style.inputGroup2}>
              <Text style={styles.text}>아이디</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <View style={{flex: 1}}>
                  <TextInput
                    style={style.textInput}
                    value={userId}
                    onChangeText={value => {
                      setUserId(value);
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={style.button2}
                  onPress={() => {
                    idCheck();
                  }}>
                  <View>
                    <Text style={{color: '#E51A47', fontSize: 16}}>
                      중복확인
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={style.inputGroup2}>
              <Text style={styles.text}>비밀번호</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <View style={{flex: 1}}>
                  <TextInput
                    style={style.textInput}
                    value={userPwd}
                    secureTextEntry={true}
                    onChangeText={value => {
                      setUserPwd(value);
                    }}
                  />
                  <Text style={style.passInfo}>
                    영문, 숫자, 특수기호를 모두 포함해 8자 이상
                  </Text>
                </View>
              </View>
            </View>
            <View style={style.inputGroup2}>
              <Text style={styles.text}>비밀번호 확인</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <TextInput
                  style={style.textInput}
                  value={userConfirmPwd}
                  secureTextEntry={true}
                  onChangeText={value => {
                    setUserConfirmPwd(value);
                  }}
                />
              </View>
            </View>
            <View style={style.inputGroup2}>
              <Text style={styles.text}>이름</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <TextInput
                  style={style.textInput}
                  value={userName}
                  onChangeText={value => {
                    setUserName(value);
                  }}
                />
              </View>
            </View>
            <View style={style.inputGroup2}>
              <Text style={styles.text}>휴대폰 번호</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <TextInput
                  style={style.textInput}
                  value={userHp}
                  onChangeText={value => {
                    setUserHp(value);
                  }}
                />
              </View>
            </View>
            <View style={style.inputGroup2}>
              <TouchableOpacity style={style.button3}>
                <View>
                  <Text style={{color: '#E51A47', fontSize: 16}}>
                    휴대폰 본인인증
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={style.inputGroup2}>
              <Text style={styles.text}>닉네임</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <TextInput
                  style={style.textInput}
                  value={userNick}
                  onChangeText={value => {
                    setUserNick(value);
                  }}
                />
              </View>
            </View>
            <View style={style.inputGroup2}>
              <Text style={styles.text}>이메일(선택)</Text>
              <View
                style={
                  ([style.inputGroup2],
                  {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
                }>
                <TextInput
                  style={style.textInput}
                  value={userEmail}
                  onChangeText={value => {
                    setUserEmail(value);
                  }}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
              <Text style={style.text2}>나이(선택)</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text style={{color: '#777777', marginLeft: 10}}>
                  본인인증 시 자동입력
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{fontSize: 32, color: '#777777'}}>20</Text>
                  <Text style={style.text2}> 세</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#FEEDEC',
                borderRadius: 4,
                padding: 12,
                marginVertical: 10,
              }}>
              <Text style={{color: '#E51A47'}}>
                나이 정보는 청소년 구매 제한품목과 19세 미만 판매금지 품목에
                사용됩니다.
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <View>
              <View style={styles.text1}>
                <Text style={style.text2}>이용약관 동의</Text>
                <TouchableOpacity onPress={() => {}}>
                  <View
                    style={{
                      width: 73,
                      height: 29,
                      borderRadius: 4,
                      backgroundColor: '#FEEDEC',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#E51A47'}}>자세히</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.text1}>
                <Text style={style.text2}>개인정보처리방침 동의</Text>
                <TouchableOpacity onPress={() => {}}>
                  <View
                    style={{
                      width: 73,
                      height: 29,
                      borderRadius: 4,
                      backgroundColor: '#FEEDEC',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#E51A47'}}>자세히</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.text1}>
                <Text style={style.text2}>위치기반서비스 이용약관 동의</Text>
                <TouchableOpacity onPress={() => {}}>
                  <View
                    style={{
                      width: 73,
                      height: 29,
                      borderRadius: 4,
                      backgroundColor: '#FEEDEC',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{color: '#E51A47'}}>자세히</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={[style.btnSubmit, style.container0]}
              onPress={() => {
                // resetRoot('RegisterSuccess');
                // Submit_frm();
                axiosPost();
              }}>
              <Text style={[style.btnSubmitTxt]}>회원가입 완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
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

function mapStateToProps(state) {
  return {
    mb_level: state.register.mb_level,
    mb_name: state.register.mb_name,
    mb_nickname: state.register.mb_nickname,
    mb_hp: state.register.mb_hp,
    mb_email: state.register.mb_email,

    mb_id: state.register.mb_id,
    mb_name: state.register.mb_name,
    mb_hp: state.register.mb_hp, // 휴대폰
    mb_nick: state.register.mb_nick,
    mb_email: state.register.mb_email,
    mb_7: state.register.mb_7,
    // mb_3: state.register.mb_3, // 나이
    // token: state.register.token,
    // mb_birth: state.register.mb_birth, // 생일
    // mb_level: state.register.mb_level, // 권한
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default RegisterInputScreen;
