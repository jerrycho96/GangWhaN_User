import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';

import style from '../style/style';

export default function WriteReviewScreen() {
  const [starState, setStarState] = useState(3);
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{padding: 10, backgroundColor: 'grey'}}>
        <View style={{alignItems: 'center', alignItems: 'center'}}>
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
            flexDirection: 'row',
            marginVertical: '15%',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
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
        </View>
        <View>
          <Text style={[style.text2, {marginBottom: 15}]}>리뷰내용</Text>
          <View
            style={{
              height: 100,
              padding: 15,
              borderWidth: 1,
              borderColor: '#E3E3E3',
            }}>
            <TextInput
              maxLength={100}
              multiline={true}
              placeholder="라뷰내용을 입력해주세요 (최대 100자)"></TextInput>
          </View>
        </View>
        <View style={{height: '4%'}}></View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={[style.text2, {marginVertical: 15}]}>
              사진첨부 (1/3)
            </Text>
            <Text style={{color: '#E51A47'}}>
              사진은 최대 3장까지 첨부 가능합니다
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/pic5.png')}
              style={{height: 121, width: 121}}></Image>
            <Image source={require('../images/pic5.png')}></Image>
            <Image source={require('../images/pic5.png')}></Image>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#E51A47',
            height: 45,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>리뷰 작성 완료</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
