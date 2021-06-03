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
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigate} from '../../navigation/RootNavigation';
import style from '../../style/style';

export default function QuestionsView({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={[{justifyContent: 'space-between'}]}>
        <View style={{paddingHorizontal: 15}}>
          <Text style={{fontSize: 18, marginTop: 15, marginBottom: 10}}>
            1:1 문의 질문입니다. 1:1 문의 질문입니다.
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#B2B2B2', marginBottom: 5}}>홍길동</Text>
            <Image
              source={require('../../images/questionsviewline.png')}
              style={{marginHorizontal: 5}}></Image>
            <Text style={{color: '#B2B2B2', marginBottom: 5}}>2021.09.27</Text>
          </View>
          <View style={{marginVertical: 10}}>
            <Text style={[style.text2]}>
              공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에
              의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
              법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
              있다.
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
        <View
          style={{
            backgroundColor: '#F9F9F9',
            height: 35,
            marginTop: 30,
            justifyContent: 'center',
            paddingHorizontal: 15,
          }}>
          <Text style={[style.text2, {fontWeight: '600'}]}>답변/댓글</Text>
        </View>
        <View style={{padding: 15}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginRight: 10}}>
                강화N
              </Text>
              <Text style={{color: '#B2B2B2'}}>2021.09.27 13:00 </Text>
            </View>
            <Text style={[style.text2, {marginTop: 10}]}>
              공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에
              의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
              법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
              있다.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 1,
              marginVertical: 15,
            }}></View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginRight: 10}}>
                강화N
              </Text>
              <Text style={{color: '#B2B2B2'}}>2021.09.27 13:00 </Text>
            </View>
            <Text style={[style.text2, {marginTop: 10}]}>
              공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에
              의한다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과
              법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수
              있다.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#E5E5E5',
              height: 1,
              marginVertical: 15,
            }}></View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}>
        <View
          style={{
            width: '100%',
            borderTopWidth: 0.5,
            borderTopColor: '#E5E5E5',
            backgroundColor: 'white',
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="댓글 내용을 입력하세요"
            style={{
              height: 45,
              borderRadius: 5,
              borderWidth: 0.5,
              flex: 1,
              borderColor: '#CCCCCC',
              paddingHorizontal: 10,
              fontSize: 16,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#E51A47',
              borderRadius: 5,
              height: 45,
              width: 70,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Text style={{fontSize: 16, color: 'white', fontWeight: '600'}}>
              등록
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
