import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {StackActions, CommonActions} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {BtnSubmit} from '../components/BOOTSTRAP';
import style from '../style/style';
import {navigate, resetRoot} from '../navigation/RootNavigation';

function LoginScreen({navigation}) {
  return (
    <View style={[style.container1, {backgroundColor: 'white'}]}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <View
        style={{
          flex: 1.2,
          justifyContent: 'center',
          ...Platform.select({ios: {paddingTop: '15%'}}),
        }}>
        <Image
          source={require('../images/imageLogo3x.png')}
          style={[style.imgContain, {width: 250, height: 200}]}
        />
      </View>
      <View
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={style.inputGroup2}>
          <TextInput
            style={style.textInput}
            placeholder={'아이디를 입력해주세요'}></TextInput>
        </View>
        <View style={style.inputGroup2}>
          <TextInput
            style={style.textInput}
            placeholder={'비밀번호를 입력해주세요'}></TextInput>
        </View>
        <View style={style.inputGroup2}>
          {/* <BtnSubmit title="로그인" navi="Main"></BtnSubmit> */}
          <TouchableOpacity
            onPress={() => {
              resetRoot('Main');
            }}
            style={{
              width: '100%',
              height: 45,
              backgroundColor: '#E51A47',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              로그인
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.login_btnGroup2}>
          <TouchableOpacity
            style={[style.login_btnGroup]}
            onPress={() => navigate('Register')}>
            <Text style={{fontWeight: 'bold'}}>회원가입</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity
            style={[style.login_btnGroup]}
            onPress={() => navigation.navigate('FindAccount')}>
            <Text>계정찾기</Text>
          </TouchableOpacity>
          <Text>|</Text>
          <TouchableOpacity style={[style.login_btnGroup]} onPress={() => {}}>
            <Text>비회원 이용</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={[style.social_group, {justifyContent: 'flex-end'}]}>
        <TouchableOpacity
          style={[
            style.social_btn,
            style.container0,
            {backgroundColor: '#00C73C'},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./../images/naver_login.png')}
              width={18}
              height={18}></Image>
            <Text style={[style.social_txt, {color: '#fff'}]}>
              네이버 로그인
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.social_btn,
            style.container0,
            {backgroundColor: '#FAE100'},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./../images/kakao_login.png')}
              width={18}
              height={18}></Image>
            <Text style={[style.social_txt, {color: '#000'}]}>
              카카오톡 로그인
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.social_btn,
            style.container0,
            {backgroundColor: '#000'},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./../images/apple_login.png')}
              width={18}
              height={18}></Image>
            <Text style={[style.social_txt, {color: '#fff'}]}>
              APPLE ID 로그인
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}
export default LoginScreen;
