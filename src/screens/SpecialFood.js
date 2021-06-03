import React from 'react';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import style from '../style/style';
import { TextInput } from 'react-native-paper';

import { MainCircleButton } from './Main';

function SpecialFoodScreen({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>

            <View style={{ backgroundColor: 'white' }}>
                <View style={{ margin: 15 }}>
                    <View>
                        <View style={{ backgroundColor: 'white' }}>
                            <TextInput
                                borderWidth={1}
                                borderColor='#CCCCCC'
                                underlineColor='white'
                                borderRadius={100}
                                width='100%'
                                style={{
                                    width: '100%', height: 45, backgroundColor: 'white', paddingHorizontal: 12, marginBottom: 25
                                }}
                                placeholder='매장명을 입력하세요'
                                placeholderTextColor='#AAAAAA'
                                right={<TextInput.Icon style={{ backgroundColor: 'white' }} name={require('./../images/search_icon.png')} color={'#E51A47'} />} />
                        </View>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <MainCircleButton
                                    title='섬 쌀'
                                    source={require('./../images/food2-1.png')}
                                    onPress={() => { navigation.navigate('DeliveryFood') }}
                                ></MainCircleButton>
                                <MainCircleButton title='인삼' source={require('./../images/food2-2.png')}></MainCircleButton>
                                <MainCircleButton title='새우젓' source={require('./../images/food2-3.png')}></MainCircleButton>
                                <MainCircleButton title='순무' source={require('./../images/food2-4.png')}></MainCircleButton>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: '#E5E5E5', marginVertical: 20 }}></View>
                        <View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <MainCircleButton title='갯벌장어' source={require('./../images/food2-5.png')}></MainCircleButton>
                                <MainCircleButton title='고구마' source={require('./../images/food2-6.png')}></MainCircleButton>
                                <MainCircleButton title='약쑥' source={require('./../images/food2-7.png')}></MainCircleButton>
                                <MainCircleButton title='약쑥한우' source={require('./../images/food2-8.png')}></MainCircleButton>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: '#E5E5E5', marginVertical: 20 }}></View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <MainCircleButton title='토마토' source={require('./../images/food2-9.png')}></MainCircleButton>
                                <MainCircleButton title='청결고추' source={require('./../images/food2-10.png')}></MainCircleButton>
                                <MainCircleButton title='섬 배' source={require('./../images/food2-11.png')}></MainCircleButton>
                                <MainCircleButton title='포도' source={require('./../images/food2-12.png')}></MainCircleButton>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: '#E5E5E5', marginVertical: 20 }}></View>

                        <View style={{ flexDirection: 'row' }}>
                            <MainCircleButton title='수박' source={require('./../images/food2-13.png')}></MainCircleButton>
                            <View width={26}></View>
                            <MainCircleButton title='오이' source={require('./../images/food2-14.png')}></MainCircleButton>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default SpecialFoodScreen;