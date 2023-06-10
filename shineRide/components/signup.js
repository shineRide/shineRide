import React from "react";
import { Center, Input, Icon, Stack } from "native-base";
import { Pressable ,Text} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LottieAnimationScreen from "./lottie";

const Signup = () => {
  return (
    <>
    <Center> 
      <Text
       style={{
     
        fontSize: 20,
          marginTop:75,
        color: '#1B4E9C',
        // marginBottom: 100,
        fontWeight: 'bold',
      }}
      > SIGN UP</Text>
      <LottieAnimationScreen />
      </Center>
     
      <Stack space={4} w="100%" alignItems="center">
        <Input
          borderColor={"muted.400"}
          backgroundColor={"muted.100"}
          autoCapitalize="none"
          borderRadius={35}
          w={{
            base: "75%",
            md: "25%",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="person" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="E-mail"
        />
        <Input
          borderColor={"muted.400"}
          autoCapitalize="none"
          backgroundColor={"muted.100"}
          borderRadius={35}
          w={{
            base: "75%",
            md: "25%",
          }}
          InputRightElement={<Pressable></Pressable>}
          placeholder="Password"
        />
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
      </Stack>
    </>
  );
};

export default Signup;
