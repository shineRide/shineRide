import React from "react";
import { Center, Input, Icon, Stack } from "native-base";
import { Pressable, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LottieAnimationScreen from "./lottie";

const Entry = ({navigation}) => {
  return (
    <>
      <Center>
        <Text
          style={{
            fontSize: 20,
            marginTop: 150,
            color: "#1B4E9C",
            // marginBottom: 100,
            fontWeight: "bold",
          }}
        >
         
          WELCOME TO SHINERIDE
        </Text>
        <LottieAnimationScreen />
      </Center>

      <Stack space={4} w="100%" alignItems="center">
        <Pressable
          style={{
            backgroundColor: "#1B4E9C",
            height: 55,
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 35,
            marginHorizontal: 20,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "white",
          }}
          onPress={()=>navigation.navigate("SignUp")}
        >
          <Text
            style={{
       
                fontSize: 20,
                fontWeight: '600',
                color: 'white',
                letterSpacing: 0.5,
              
            }}
          >
            Sign Up
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#1B4E9C",
            height: 55,
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 35,
            marginHorizontal: 20,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "white",
          }}
          onPress={()=>navigation.navigate("Signin")}

        >
          <Text
            style={{
       
                fontSize: 20,
                fontWeight: '600',
                color: 'white',
                letterSpacing: 0.5,
              
            }}
          >
            Sign In
          </Text>
        </Pressable>
      </Stack>
    </>
  );
};

export default Entry;
