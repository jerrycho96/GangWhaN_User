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

import AsyncStorage from '@react-native-community/async-storage';

import axios from './../api/axios';
// import axios from 'axios';

import {ShowSnackbar} from '../components/BOOTSTRAP';
import style from '../style/style';
import {navigate, resetRoot} from '../navigation/RootNavigation';

import KakaoLogin from '@actbase/react-native-kakao-login';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';

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

function LoginScreen({navigation}) {
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
  // 로그인
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [errortext, setErrortext] = React.useState('');

  const passwordInputRef = React.createRef();

  const axiosPost = () => {
    let dataToSend = {mb_id: userEmail, mb_password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post(
        'login_select.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        if (!userEmail) {
          ShowSnackbar({text: '아이디를 확인해주세요'});
          return;
        }
        if (!userPassword) {
          ShowSnackbar({text: '비밀번호를 확인해주세요'});
          return;
        }
        if (response.data.message === 'success') {
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({
              userId: response.data.rowdata[0].mb_id,
              token: '1234',
            }),
          );
          console.log('login id : ', response.data.rowdata[0].mb_id);
          ShowSnackbar({
            text: response.data.rowdata[0].mb_name + ' 님 로그인 되었습니다.',
          });
          console.log(AsyncStorage.getItem('userData'));
          navigation.replace('Main');
        } else if (response.data.message === 'Processing error(1)') {
          ShowSnackbar({text: '아이디 또는 비밀번호를 확인해주세요.'});
        } else {
          setErrortext(response.data.message);
          ShowSnackbar({
            text: '로그인 오류',
          });
          console.log(errortext);
        }

        // console.log(response);
        console.log('통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        ShowSnackbar({
          text: '로그인 오류',
        });
        console.log('통신 실패');
      });
  };

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
            placeholder={'아이디를 입력해주세요'}
            returnKeyType="next"
            onChangeText={value => setUserEmail(value)}
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }></TextInput>
        </View>
        <View style={style.inputGroup2}>
          <TextInput
            style={style.textInput}
            placeholder={'비밀번호를 입력해주세요'}
            secureTextEntry={true}
            onChangeText={value => setUserPassword(value)}></TextInput>
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
            }}
            onPress={
              // handleSubmitPress
              axiosPost
            }>
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
          ]}
          onPress={() => naverLogin(initials)}>
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
      </SafeAreaView>
    </View>
  );
}
export default LoginScreen;
