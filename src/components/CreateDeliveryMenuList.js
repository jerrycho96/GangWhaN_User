import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

const defaultData = {
  data1: [
    {
      key: '0',
      name: '김치찌개',
      img: require('./../images/listitemimg.png'),
      contents: '강화김치찌개에서 가장 잘나가는 메인메뉴',
      titleMenu: true,
      price: '7,000',
      foodtype: 'food',
    },
    {
      key: '1',

      name: '김치찌개',
      img: require('./../images/listitemimg.png'),
      contents: '강화김치찌개에서 가장 잘나가는 메인메뉴',
      titleMenu: true,
      price: '7,000',
    },
    {
      key: '2',
      name: '김치찌개',
      img: require('./../images/listitemimg.png'),
      contents: '강화김치찌개에서 가장 잘나가는 메인메뉴',
      titleMenu: false,
      price: '7,000',
    },
    {
      key: '3',
      name: '김치찌개',
      img: require('./../images/listitemimg.png'),
      contents: '강화김치찌개에서 가장 잘나가는 메인메뉴',
      titleMenu: false,
      price: '7,000',
    },
  ],
  data2: [
    {
      key: '1',
      name: '참이슬후레쉬',
      price: '4,000',
      foodtype: 'drink',
    },
  ],
};

const RenderItem = ({item}) => {
  return (
    <View style={{paddingHorizontal: 10}}>
      <TouchableOpacity style={style.itemView} onPress={() => {}}>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={style.itemName}>{item.name} </Text>
            {item.titleMenu ? (
              <Image
                source={require('./../images/titlemenu.png')}
                style={style.newtakeout}></Image>
            ) : (
              <View></View>
            )}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 3,
            }}>
            {item.foodtype === 'food' ? (
              <Text style={style.contents}>{item.contents}</Text>
            ) : null}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginVertical: 3,
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'center'}}>
              <View style={{height: item.foodtype === 'food' ? 15 : 0}}></View>
              <Text>{item.price}원</Text>
            </View>
          </View>
        </View>
        <Image source={item.img} style={style.itemImg}></Image>
      </TouchableOpacity>
      <View
        style={{
          borderWidth: 0.7,
          borderColor: '#E5E5E5',
          marginVertical: 10,
        }}></View>
    </View>
  );
};

function CreateDeliveryMenuList({item}) {
  const [foodplace, setFoodPlace] = useState(defaultData.data1);
  const [drink, setDrink] = useState(defaultData.data2);
  const [acco, setAcco] = useState(false);

  return (
    <View style={style.root}>
      <Collapse>
        <CollapseHeader onPress={() => setAcco(true)}>
          <View style={style.collapseStyle}>
            <Text style={{fontSize: 18}}>김치찌개</Text>
            {acco ? (
              <Image source={require('../images/accordionicon1.png')}></Image>
            ) : (
              <Image source={require('../images/accordionicon1.png')}></Image>
            )}

            {/* {acco ? <Image srouce={require('../images/accordionicon1.png')} />
                            : <Image srouce={require('../images/accordionicon2.png')} />} */}
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            data={foodplace}
            renderItem={RenderItem}
            keyExtractor={item => item.key}></FlatList>
        </CollapseBody>
      </Collapse>
      <Collapse>
        <CollapseHeader onPress={() => setAcco(true)}>
          <View style={style.collapseStyle}>
            <Text style={{fontSize: 18}}>주류메뉴</Text>
            {acco ? (
              <Image source={require('../images/accordionicon1.png')}></Image>
            ) : (
              <Image source={require('../images/accordionicon1.png')}></Image>
            )}

            {/* {acco ? <Image srouce={require('../images/accordionicon1.png')} />
                            : <Image srouce={require('../images/accordionicon2.png')} />} */}
          </View>
        </CollapseHeader>
        <CollapseBody>
          <FlatList
            data={drink}
            renderItem={RenderItem}
            keyExtractor={item => item.key}></FlatList>
        </CollapseBody>
      </Collapse>
    </View>
  );
}
const style = StyleSheet.create({
  root: {flex: 1, backgroundColor: 'white'},
  itemView: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    margin: 8,
    marginBottom: 5,
    alignItems: 'center',
  },
  itemImg: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
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
  contents: {
    color: '#777777',
  },
  newtakeout: {marginRight: 5},
  collapseStyle: {
    height: 50,
    backgroundColor: '#F9F9F9',
    borderBottomWidth: 0.2,
    borderBottomColor: '#707070',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
});

export default CreateDeliveryMenuList;
