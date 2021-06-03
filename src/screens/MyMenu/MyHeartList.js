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

const defaultData = {
  datas3: [
    {
      key: '0',
      name: '강화김치찌개',
      stars: 3.0,
      img: require('../../images/listitemimg.png'),
      delPrice: '3,850',
      delTime: '13:00 ~ 20:00',
      delKm: '1.2',
      new: true,
      takeout: true,
    },
    {
      key: '1',
      name: '강화김치찌개1',
      stars: 3.5,
      img: require('../../images/listitemimg.png'),
      delPrice: '3,850',
      delTime: '14:00 ~ 20:00',
      delKm: '1.2',
      new: true,
      takeout: true,
    },
    {
      key: '2',
      name: '강화김치찌개3',
      stars: 5.0,
      img: require('../../images/listitemimg.png'),
      delPrice: '3,850',
      delTime: '15:00 ~ 20:00',
      delKm: '1.2',
      new: false,
      takeout: true,
    },
    {
      key: '3',
      name: '강화김치찌개2',
      stars: 2.5,
      img: require('../../images/listitemimg.png'),
      delPrice: '3,850',
      delTime: '10:00 ~ 20:00',
      delKm: '1.2',
      new: false,
      takeout: true,
    },
  ],
};

const RenderItem = ({item}) => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <View style={styles.itemView}>
        <Image source={item.img} style={styles.itemImg}></Image>
        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.itemName}>{item.name} </Text>
              {item.new ? (
                <Image
                  source={require('../../images/new.png')}
                  style={styles.newtakeout}></Image>
              ) : null}
              {item.takeout ? (
                <Image
                  source={require('../../images/takeout.png')}
                  style={styles.newtakeout}></Image>
              ) : null}
            </View>
            <TouchableOpacity>
              <Image
                source={require('../../images/myheartlisticon.png')}
                style={{resizeMode: 'contain'}}></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 3,
            }}>
            <Image source={require('../../images/stars.png')} />
            <Text style={styles.itemMsg}>{item.stars}</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginVertical: 3,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={require('../../images/time.png')} />
              <Text style={styles.itemMsg}>{item.delTime}</Text>
            </View>

            <Text>{item.delKm}km</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.7,
          borderColor: '#E5E5E5',
          marginVertical: 10,
        }}></View>
    </View>
  );
};

export default function MyHeartList({navigation}) {
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
      data={defaultData.datas3}
      renderItem={RenderItem}></FlatList>
  );
}

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
    shadowOpacity: 0.2,
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
});
