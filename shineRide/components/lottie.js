import {View , Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';


const LottieAnimationScreen =()=>{
    return (
        <View >
    {/* animation tag , e tag li lehya bel animation li f awel l app hyya lottie         */}
  <Lottie
  style={{width:300, height:370}}
  source={require('../assets/car.json')} 
  autoPlay
  loop
  />

        </View>
    )
}


export default LottieAnimationScreen ;
