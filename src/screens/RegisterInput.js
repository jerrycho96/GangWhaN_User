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
import {StackActions, CommonActions} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import style from '../style/style';
import {resetRoot} from '../navigation/RootNavigation';

function RegisterInputScreen({navigation}) {
  return (
    <ScrollView>
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
                <TextInput style={style.textInput}></TextInput>
              </View>
              <TouchableOpacity style={style.button2}>
                <View>
                  <Text style={{color: '#E51A47', fontSize: 16}}>중복확인</Text>
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
                <TextInput style={style.textInput}></TextInput>
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
              <TextInput style={style.textInput}></TextInput>
            </View>
          </View>
          <View style={style.inputGroup2}>
            <Text style={styles.text}>이름</Text>
            <View
              style={
                ([style.inputGroup2],
                {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
              }>
              <TextInput style={style.textInput}></TextInput>
            </View>
          </View>
          <View style={style.inputGroup2}>
            <Text style={styles.text}>휴대폰 번호</Text>
            <View
              style={
                ([style.inputGroup2],
                {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
              }>
              <TextInput style={style.textInput}></TextInput>
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
              <TextInput style={style.textInput}></TextInput>
            </View>
          </View>
          <View style={style.inputGroup2}>
            <Text style={styles.text}>이메일(선택)</Text>
            <View
              style={
                ([style.inputGroup2],
                {flexDirection: 'row', alignItems: 'center', marginBottom: 8})
              }>
              <TextInput style={style.textInput}></TextInput>
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
            onPress={() => resetRoot('RegisterSuccess')}>
            <Text style={[style.btnSubmitTxt]}>회원가입 완료</Text>
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
export default RegisterInputScreen;
