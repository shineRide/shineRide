import React, { useState } from "react";
import { Center, Input, Icon, Stack } from "native-base";
import { Pressable, Text, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import LottieAnimationScreen from "./lottie";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./firebase.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { clientEndpoints } from "../endpoints";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;

      // Ta3mel GET request bach tfetchi les données mte3 client
      axios
        .get(clientEndpoints.getClient(email))
        .then((res) => {
          //chouf client mawjoud wela la
          if(res.data.length>0){

            console.log("Utilisateur connecté :", user);
            Alert.alert("Success", "Utilisateur connecté avec succès");
            console.log(res.data);
            // Stocki token mte3 l'utilisateur fel AsyncStorage
            AsyncStorage.setItem("userToken", user.email);
  
            navigation.navigate("Navigation"); // Navigiw lal Home component
          }else{
                        Alert.alert(
                          "danger",
                          "Utilisateur already exist"
                        );

          }
        })
        .catch((err) => console.log(err)); //Handle erreur fel connexion
    });
  };

  return (
    <>
      <Center>
        <Text
          style={{
            fontSize: 20,
            marginTop: 100,
            color: "#1B4E9C",
            // marginBottom: 100,
            fontWeight: "bold",
          }}
        >
          SIGN IN
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
          onPress={() => {
            handleSignIn();
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "white",
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

export default Signin;
