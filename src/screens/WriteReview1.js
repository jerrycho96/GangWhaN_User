import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import {navigate} from '../navigation/RootNavigation';
import {goPop} from '../navigation/RootNavigation';

import style from '../style/style';

const width = Dimensions.get('window').width;

export default function WriteReview1() {
  const [starState, setStarState] = useState(3);
  return (
    <View
      style={{
        padding: 15,
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: '6%',
            marginBottom: '8%',
          }}>
          음식은 맛있게 드셨나요?
        </Text>
        <Text style={{textAlign: 'center', fontSize: 16}}>
          업체와 음식에 대한 리뷰를 작성해주세요
          {'\n'}작성해주신 리뷰는 저희에게 큰 힘이 됩니다
        </Text>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          width: '80%',
        }}>
        <StarRating
          fullStar={require('../images/reviewstarfilled.png')}
          emptyStar={require('../images/reviewstarempty.png')}
          halfStar={require('../images/reviewstarhalf.png')}
          halfStarEnabled={true}
          starStyle={{marginHorizontal: 5}}
          starSize={45}
          maxStars={5}
          rating={starState}
          selectedStar={rating => setStarState(rating)}
        />
      </View>
      <View style={{flex: 3, width: '100%'}}>
        <Text style={[style.text2, {marginBottom: 15}]}>리뷰내용</Text>
        <View
          style={{
            height: 100,
            padding: 10,
            borderWidth: 1,
            borderColor: '#E3E3E3',
          }}>
          <TextInput
            maxLength={100}
            multiline={true}
            placeholder="리뷰내용을 입력해주세요 (최대 100자)"></TextInput>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: 15,
              paddingTop: 15,
            }}>
            <Text style={[style.text2]}>사진첨부 (1/3)</Text>
            <Text style={{color: '#E51A47'}}>
              사진은 최대 3장까지 첨부 가능합니다
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Image
                source={require('../images/pic5.png')}
                style={{height: width / 3.4, width: width / 3.4}}></Image>
              <Image
                source={require('../images/reviewx.png')}
                style={{position: 'absolute', right: 5, top: 5}}></Image>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E5E5E5',
                height: width / 3.4,
                width: width / 3.4,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../images/reviewplus.png')}></Image>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderColor: '#E5E5E5',
                height: width / 3.4,
                width: width / 3.4,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../images/reviewplus.png')}></Image>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: '100%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#E51A47',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => {
            goPop();
          }}>
          <Text style={{color: 'white', fontSize: 16}}>리뷰 작성 완료</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
