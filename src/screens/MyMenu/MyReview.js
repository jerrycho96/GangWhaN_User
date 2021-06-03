import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import style from '../../style/style';
import Stars from 'react-native-stars';
import {navigate} from '../../navigation/RootNavigation';

const reviewData = {
  data1: [
    {
      key: '0',
      name: '강화김치찌개',
      stars: 5,
      contents: '김치찌개 강추 !!',
      date: '2021-02-02',
      img1: require('../../images/listitemimg.png'),
      adminreview: {
        review: '소중한 리뷰 감사합니다.^^',
      },
      recomment: false,
    },
    {
      key: '1',
      name: '강화김치찌개',
      stars: 4,
      img1: null,
      contents: '김치찌개 강추 !!',
      date: '2021-01-02',
      recomment: true,
    },
    {
      key: '2',
      name: '강화김치찌개',
      stars: 3.5,
      img1: require('../../images/listitemimg.png'),
      contents: '김치찌개 강추 !!',
      date: '2021-01-02',
      recomment: true,
    },
  ],
};

export default function MyReview({navigation}) {
  return (
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
            placeholder="매장명을 입력하세요"
            placeholderTextColor="#AAAAAA"
            right={
              <TextInput.Icon
                style={{backgroundColor: 'white'}}
                // name={require('../../images/search_icon.png')}
                name={require('../../images/search_icon.png')}
                color={'#E51A47'}
              />
            }
          />
        </View>
      }
      //   목록 랜더링
      data={reviewData.data1}
      renderItem={RenderReviewList}
      keyExtractor={item => item.key}></FlatList>
  );
}
const width = Dimensions.get('window').width;

const RenderReviewList = ({item}) => {
  return (
    <View>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#777777'}}>{item.date}</Text>
            <Text style={[styles.title, {marginRight: 10}]}>{item.name}</Text>
          </View>
          <TouchableOpacity
            style={{
              height: 30,
              width: 88,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              borderColor: '#E51A47',
              borderWidth: 1,
            }}
            onPress={() => {
              navigate('DeliveryDetail');
            }}>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#E51A47'}}>
              매장가기
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          <Stars
            display={item.stars}
            spacing={2}
            count={5}
            starSize={17}
            fullStar={require('../../images/starFilled.png')}
            emptyStar={require('../../images/starEmpty.png')}
          />
        </View>
        <View>
          <Text style={[styles.text2, {marginVertical: 10}]}>
            {item.contents}
          </Text>
        </View>
        {item.img1 !== null ? (
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              source={item.img1}
              style={{width: width / 3.4, height: width / 3.4}}></Image>
            <Image
              source={item.img1}
              style={{width: width / 3.4, height: width / 3.4}}></Image>
            <Image
              source={item.img1}
              style={{width: width / 3.4, height: width / 3.4}}></Image>
          </View>
        ) : (
          <View></View>
        )}

        {item.recomment ? (
          <View
            style={{
              padding: 15,
              flexDirection: 'row',
              backgroundColor: '#F9F9F9',
              borderColor: '#E5E5E5',
              borderWidth: 1,
              borderRadius: 5,
              marginTop: 10,
            }}>
            <Image source={require('../../images/adminreviewicon.png')}></Image>
            <View style={{marginLeft: 15}}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.title, {marginRight: 10}]}>
                  강화김치찌개
                </Text>
                <Text style={{color: '#777777'}}>2021.0.1.02</Text>
              </View>
              <Text style={style.text2}>소중한 리뷰 감사합니다</Text>
            </View>
          </View>
        ) : null}
      </View>
      <View style={{height: 10, backgroundColor: '#F5F5F5'}}></View>
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
    marginBottom: 15,
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
  title: {marginBottom: 10, fontSize: 16, fontWeight: 'bold'},
  contents: {marginRight: 20, marginBottom: 10, fontSize: 16},
  img: {resizeMode: 'cover', marginRight: 10, marginBottom: 10},
});
