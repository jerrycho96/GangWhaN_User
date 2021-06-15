import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {navigate} from '../navigation/RootNavigation';

import KakaoLogin from '@actbase/react-native-kakao-login';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

import style from '../style/style';

// 카카오

const iosKeys = {
  kConsumerKey: 'Wrl2EnohjGgLLDGoneQ_',
  kConsumerSecret: 'dDDty5kJz0',
  kServiceAppName: '테스트앱(iOS)',
  kServiceAppUrlScheme: 'testapp', // only for iOS
};

const androidKeys = {
  kConsumerKey: 'Wrl2EnohjGgLLDGoneQ_',
  kConsumerSecret: 'dDDty5kJz0',
  kServiceAppName: '테스트앱(안드로이드)',
};
//-------------------------------------------------------------------

function RegisterScreen({navigation}) {
  // 카카오
  const kakaoLogin = () => {
    KakaoLogin.login()
      .then(result => {
        getProfile1();
        console.log(`Login Finished:${JSON.stringify(result)}`);
      })
      .catch(err => {
        if (err.code === 'E_CANCELLED_OPERATION') {
          console.log(`Login Cancelled:${err.message}`);
        } else {
          console.log(`Login Failed:${err.code} ${err.message}`);
        }
      });
  };

  const getProfile1 = () => {
    KakaoLogin.getProfile()
      .then(result => {
        console.log(`Login Finished:${JSON.stringify(result)}`);
        // 이후 result.id를 활용해서 로그인 로직을 구현해주세용
      })
      .catch(err => {
        console.log(`Get Profile Failed:${err.code} ${err.message}`);
      });
  };
  //-------------------------------------------------------------------

  // 네이버
  const [naverToken, setNaverToken] = React.useState(null);
  const initials = Platform.OS === 'ios' ? iosKeys : androidKeys;

  const naverLogin = props => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken('');
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    console.log('profileResult', profileResult);
  };
  //-------------------------------------------------------------------

  return (
    <View style={[style.container1, {backgroundColor: 'white'}]}>
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <Image
          source={require('../images/imageLogo3x.png')}
          style={[style.imgContain, {width: 250, height: 200}]}></Image>
      </SafeAreaView>

      <View style={[style.social_group, {flex: 1, justifyContent: 'center'}]}>
        <TouchableOpacity
          style={[
            style.social_btn,
            style.container0,
            {backgroundColor: '#00C73C'},
          ]}
          onPress={() => {
            naverLogin(initials);
          }}>
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
          ]}
          onPress={() => {
            kakaoLogin();
          }}>
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
        <TouchableOpacity
          style={[
            style.social_btn,
            style.container0,
            {backgroundColor: '#E51A47'},
          ]}
          onPress={() => navigation.navigate('RegisterInput')}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./../images/register_icon.png')}
              width={18}
              height={18}></Image>
            <Text style={[style.social_txt, {color: '#fff'}]}>
              일반 회원가입
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={[style.login_btnGroup2, {flex: 1}]}>
        <TouchableOpacity
          style={[style.login_btnGroup]}
          onPress={() => {
            navigate('Login');
          }}>
          <Text style={{fontWeight: 'bold'}}>로그인</Text>
        </TouchableOpacity>
        <Text>|</Text>
        <TouchableOpacity style={[style.login_btnGroup]} onPress={() => {}}>
          <Text>비회원 이용</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default RegisterScreen;
