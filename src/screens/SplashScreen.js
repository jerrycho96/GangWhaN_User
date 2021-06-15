import {SportsBaseballSharp} from '@material-ui/icons';
import React from 'react';
import {Image, View, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function SplashScreen1({navigation}) {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('mb_id').then(value =>
        navigation.replace(value === null ? 'Login' : 'Main'),
      );
    }, 2000);
  }, []);
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
        style={{flex: 1, resizeMode: 'contain', marginBottom: '30%'}}
      />
    </View>
  );
}
