// import {View , Text} from 'react-native';
// import React from 'react';
// import Lottie from 'lottie-react-native';


// const LottieAnimationScreentwo =()=>{
//     return (
//         <View >
//     {/* animation tag , e tag li lehya bel animation li f awel l app hyya lottie         */}
//   <Lottie
//   style={{width:100, height:100 , left:60}}
//   source={require('../assets/OrderNow.json')} 
//   autoPlay
//   loop

//   />



//         </View>
//     )
// }


// export default LottieAnimationScreentwo ;

import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Your button component
const LottieAnimationScreentwo = ({ onPress, title }) => (
  
<View style={{ height: 70, width:220, top:5 }}>
  <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.97}>
    <LinearGradient
      colors={["rgba(0,0,0,0)", "rgba(0,0,0,0)", "rgba(0,0,0,0.3)"]}
      style={styles.gradient}
    >
      <View style={styles.transition}></View>
    </LinearGradient>
    <Text style={styles.label}>{title}</Text>
  </TouchableOpacity>
  </View>

  
);

// Styles
const styles = StyleSheet.create({
  button: {
    fontFamily: "monospace",
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 50,
    fontWeight: "500",
    backgroundColor: "#1B4E9C",
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
    alignItems: "center",
    top:60
  },
  
  label: {
    color: "white",
    position: "relative",
  },

});

export default LottieAnimationScreentwo;
