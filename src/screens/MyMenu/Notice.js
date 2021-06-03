import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-navigation';
import {navigate} from '../../navigation/RootNavigation';
import style from '../../style/style';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const noticeData = {
  data1: [
    {
      key: '0',
      noticetitle: '공지사항 제목입니다',
      date: '2021-02-02',
      new: true,
    },
    {
      key: '1',
      noticetitle:
        '공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다',
      date: '2021-02-02',
      new: true,
    },
    {
      key: '2',
      noticetitle:
        '공지사항 제목입니다 공지사항 제목입니다 공지사항 제목입니다',
      date: '2021-02-02',
      new: false,
    },
    {
      key: '3',
      noticetitle: '공지사항 제목입니다',
      date: '2021-02-02',
      new: false,
    },
    {
      key: '4',
      noticetitle: '공지사항 제목입니다',
      date: '2021-02-02',
      new: false,
    },
    {
      key: '5',
      noticetitle: '공지사항 제목입니다',
      date: '2021-02-02',
      new: false,
    },
    {
      key: '6',
      noticetitle: '공지사항 제목입니다',
      date: '2021-02-02',
      new: false,
    },
  ],
};
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: 'black',
  },
};

export default function Notice({navigation}) {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <FlatList
          style={{backgroundColor: 'white'}}
          ListHeaderComponent={
            <View style={styles.searchBox}>
              <TextInput
                borderWidth={1}
                borderColor="#CCCCCC"
                underlineColor="white"
                borderRadius={100}
                width="100%"
                style={{
                  width: '100%',
                  height: 45,
                  backgroundColor: 'white',
                  paddingHorizontal: 12,
                }}
                placeholder="제목을 입력하세요"
                placeholderTextColor="#AAAAAA"
                right={
                  <TextInput.Icon
                    style={{backgroundColor: 'white'}}
                    name={require('../../images/search_icon.png')}
                    color={'#E51A47'}
                  />
                }
              />
            </View>
          }
          ListFooterComponent={
            <View
              style={{alignItems: 'center', flex: 1, backgroundColor: 'white'}}>
              <View
                style={{
                  marginTop: '15%',
                  flex: 1,
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexDirection: 'row',
                  marginBottom: '5%',
                  width: 180,
                }}>
                <Image
                  source={require('../../images/questionsbottomleft.png')}></Image>
                <Text
                  style={{
                    fontSize: 16,
                    textDecorationLine: 'underline',
                    textAlign: 'center',
                    color: '#E51A47',
                  }}>
                  1
                </Text>
                <Text style={{fontSize: 16}}>2</Text>
                <Text style={{fontSize: 16}}>3</Text>
                <Text style={{fontSize: 16}}>4</Text>
                <Text style={{fontSize: 16}}>5</Text>
                <Image
                  source={require('../../images/questionsbottomright.png')}></Image>
              </View>
            </View>
          }
          //   목록 랜더링
          data={noticeData.data1}
          renderItem={RenderNoticeList}
          keyExtractor={item => item.key}></FlatList>
      </SafeAreaView>
    </PaperProvider>
  );
}

const RenderNoticeList = ({item}) => {
  return (
    <View style={{marginHorizontal: 15}}>
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          width: '100%',
        }}
        onPress={() => {
          navigate('NoticeView');
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            paddingRight: 9,
          }}>
          <Text style={[styles.title]} numberOfLines={1}>
            {item.noticetitle}
          </Text>
          {item.new ? (
            <Image
              source={require('../../images/noticenew.png')}
              style={{
                resizeMode: 'contain',
                width: 15,
                height: 15,
                marginLeft: 10,
              }}></Image>
          ) : null}
        </View>
        <Text style={{color: '#777777'}}>{item.date}</Text>
      </TouchableOpacity>
      <View style={{backgroundColor: '#E3E3E3', height: 1}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  searchBox: {
    borderWidth: 0.5,
    borderColor: '#E5E5E5',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 5,
  },
  itemView: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    margin: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  itemImg: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginRight: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginRight: 5,
  },
  itemMsg: {
    marginLeft: 5,
  },
  delPrice: {
    color: '#777777',
  },
  newtakeout: {marginRight: 5},
  title: {marginBottom: 10, fontSize: 16},
  contents: {marginRight: 20, marginBottom: 10, fontSize: 16},
  img: {resizeMode: 'cover', marginRight: 10, marginBottom: 10},
});
