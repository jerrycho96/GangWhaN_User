import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Left, Right, Body, Footer} from 'native-base';
import style from '../style/style';
import {TextInput} from 'react-native-paper';

import axios from './../api/axios';

import CreateDeliveryList from '../components/CreateDeliveryList';
import {navigate} from '../navigation/RootNavigation';

function DeliveryListScreen({route}) {
  const {LAT, LON, ca_id, categoryList} = route.params;
  const [shopList, setShopList] = React.useState([]);
  const [categoryId, setCategoryId] = React.useState(ca_id);

  React.useEffect(() => {
    let dataToSend = {lat: LAT, lon: LON, ca_id: categoryId};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    axios
      .post(
        'shop_list.php',
        // mb_id: userEmail,
        // mb_password: userPassword,
        formBody,
      )
      .then(function (response) {
        console.log(response.data.rowdata);
        setShopList(response.data.rowdata);

        // console.log(response);
        console.log('통신 성공');
      })
      .catch(function (error) {
        console.log(error);
        console.log('통신 실패');
      });
  }, [categoryId]);

  return (
    <View style={{flex: 1}}>
      <View style={{height: 50, backgroundColor: 'white'}}>
        <ScrollView
          horizontal={true}
          style={{marginHorizontal: 15, marginTop: 15}}>
          {categoryList.map(item => {
            return (
              <TouchableOpacity
                style={
                  categoryId === item.ca_id
                    ? styles.tag_select
                    : styles.tag_unselect
                }
                onPress={() => {
                  setCategoryId(item.ca_id);
                }}>
                <Text
                  style={
                    categoryId === item.ca_id
                      ? styles.tag_select_text
                      : styles.tag_unselect_text
                  }>
                  {item.ca_name}
                </Text>
              </TouchableOpacity>
            );
          })}
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
        <CreateDeliveryList
          shopList={shopList}
          ca_id={ca_id}
          LAT={LAT}
          LON={LON}
        />
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
