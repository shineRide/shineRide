//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  Avatar,
  VStack,
  Center,
  NativeBaseProvider,
  HStack,
} from "native-base";
import { Ionicons, Entypo } from "@expo/vector-icons";
// create a component
class Service extends Component {
  render() {
    return (
      <View
        style={{
          height: 90,
          width: 90,
          marginLeft: 40,
          marginTop: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          borderRadius: 150,
        
        }}
      >
        <View style={{ flex: 4 }}>
          <Avatar
            bg=""
            alignSelf="center"
            size="xl"
            source={this.props.imageUri}
          >
            GG
          </Avatar>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <HStack>
            <Center>
              <Text>{this.props.name}</Text>
            </Center>
          </HStack>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});

//make this component available to the app
export default Service;
