import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body,
} from 'native-base';
import style from '../style/style';
import {Footer} from 'native-base';
import {TextInput} from 'react-native-paper';

import {MainCircleButton} from './Main';
import CreateDeliveryList from '../components/CreateDeliveryList';
import {red100, white} from 'react-native-paper/lib/typescript/styles/colors';
import {navigate} from '../navigation/RootNavigation';

function DeliveryListScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'white'}}>
        <ScrollView
          horizontal={true}
          style={{marginHorizontal: 15, marginTop: 15}}>
          <View style={styles.tag_select}>
            <Text style={styles.tag_select_text}>한식</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>중식</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>일식/회</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>분식</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>양식</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>치킨/피자</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>탕/찜</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>족발/보쌈</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>패스트푸드</Text>
          </View>
          <View style={styles.tag_unselect}>
            <Text style={styles.tag_unselect_text}>야식</Text>
          </View>
        </ScrollView>
      </View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={{margin: 15}}>
          <View style={{backgroundColor: 'white'}}>
            <TextInput
              theme={{colors: {primary: 'white'}}}
              borderWidth={1}
              borderColor="#CCCCCC"
              underlineColor="transparent"
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
              selectionColor="white"
              right={
                <TextInput.Icon
                  style={{backgroundColor: 'white'}}
                  name={require('./../images/search_icon.png')}
                  color={'#E51A47'}
                />
              }
            />
          </View>
        </View>
        <CreateDeliveryList></CreateDeliveryList>
      </View>

      <Footer style={styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={styles.footer_touch}
            onPress={() => {
              navigate('MyHeartList');
            }}>
            <Left style={styles.footer_design}>
              <Image source={require('./../images/footer_heart.png')}></Image>
              <Text style={[style.text2, {color: 'white'}]}> 찜한매장</Text>
            </Left>
          </TouchableOpacity>
          <Image source={require('./../images/verline.png')}></Image>
          <TouchableOpacity
            style={styles.footer_touch}
            onPress={() => {
              navigate('MyOrderList');
            }}>
            <Body style={styles.footer_design}>
              <Image source={require('./../images/footer_menu.png')}></Image>
              <Text style={[style.text2, {color: 'white'}]}> 주문내역</Text>
            </Body>
          </TouchableOpacity>
          <Image source={require('./../images/verline.png')}></Image>
          <TouchableOpacity
            style={styles.footer_touch}
            onPress={() => {
              navigate('Cart');
            }}>
            <Right style={styles.footer_design}>
              <Image source={require('./../images/footer_cart.png')}></Image>
              <Text style={[style.text2, {color: 'white'}]}> 장비구니</Text>
            </Right>
          </TouchableOpacity>
        </View>
      </Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  tag_select: {
    paddingHorizontal: 15,
    height: 29,
    backgroundColor: '#FEEDEC',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  tag_unselect: {
    paddingHorizontal: 15,
    height: 29,
    backgroundColor: '#F1F1F1',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  tag_select_text: {color: '#E51A47'},
  tag_unselect_text: {color: '#777777'},
  footer: {height: 50, backgroundColor: '#E51A47'},
  footer_touch: {alignItems: 'center', flex: 1},
  footer_design: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default DeliveryListScreen;
