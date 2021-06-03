import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {navigate} from '../../navigation/RootNavigation';
import style from '../../style/style';

export default function NoticeView({navigation}) {
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{fontSize: 18, marginTop: 15, marginBottom: 10}}>
            공지사항 제목입니다. 공지사항 제목입니다.
          </Text>
          <Text style={{color: '#B2B2B2', marginBottom: 5}}>2021.09.27</Text>
          <View style={{marginVertical: 10}}>
            <Image
              source={require('../../images/noticeimg.png')}
              style={{
                resizeMode: 'contain',
                width: '100%',
                marginBottom: 15,
              }}></Image>
            <Text style={[style.text2]}>
              공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에
              의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
              법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
              있다.
              {'\n'}
              {'\n'}
              {'\n'}
              일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는
              수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이
              발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년
              이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을
              때에는 사후에 영장을 청구할 수 있다.
            </Text>
            <Image
              source={require('../../images/noticeimg1.png')}
              style={{
                resizeMode: 'contain',
                width: '100%',
                marginVertical: 15,
              }}></Image>
            <Text style={[style.text2]}>
              공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에
              의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
              법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
              있다.
              {'\n'}
              {'\n'}
              {'\n'}
              일반사면을 명하려면 국회의 동의를 얻어야 한다. 체포·구속·압수 또는
              수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이
              발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년
              이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을
              때에는 사후에 영장을 청구할 수 있다.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
