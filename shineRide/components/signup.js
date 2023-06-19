import React, { useState } from "react";
import { Center, Input, Icon, Stack } from "native-base";
import { Pressable, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "./firebase.js";
import { MaterialIcons } from "@expo/vector-icons";
import LottieAnimationScreen from "./lottie";
import AsyncStorage from '@react-native-async-storage/async-storage';

import navigation from "./Navigation.js";
import { clientEndpoints,workerEndpoints } from "../endpoints.js";
import axios from 'axios'
const Signup = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const auth = getAuth(app);

  const handleSignup = () => {
    if (password === confirmPassword) {
      setPasswordError(false);

      // Nasne3 utilisateur bemail u password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Utilisateur tesna3
          const user = userCredential.user;
          console.log(user.email);

          // Nsajel client fi database bPOST request
          axios
            .post(clientEndpoints.createClient, { email, name: username })
            .then((res) => {
              console.log(res.data);
              AsyncStorage.setItem("userToken", user.email);
              navigation.navigate("Navigation"); // Navigiw lal Home component
            })
            .catch((err) => console.log(err));
        })
        .catch((error) => {
          // Handle erreur fel signup
          console.log(error);
        });
    } else {
      setPasswordError(true);
    }
  };


  return (
    <>
      <Center>
        <Text
          style={{
            fontSize: 20,
            marginTop: 75,
            color: "#1B4E9C",
            // marginBottom: 100,
            fontWeight: "bold",
          }}
        >
          {" "}
          SIGN UP
        </Text>
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
          value={email}
          onChangeText={setEmail}
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
          value={password}
          onChangeText={setPassword}
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
          placeholder="repeat Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {passwordError && (
          <Text style={{ color: "red", fontSize: 12 }}>
            Passwords do not match
          </Text>
        )}
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
          onPress={() => handleSignup()}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
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
