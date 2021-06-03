import {SportsBaseballSharp} from '@material-ui/icons';
import React from 'react';
import {Image, View, StatusBar} from 'react-native';

export default function SplashScreen1() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar hidden />
      <Image
        source={require('../images/splashimg.png')}
        style={{flex: 1, resizeMode: 'contain', marginBottom: '30%'}}></Image>
    </View>
  );
}
