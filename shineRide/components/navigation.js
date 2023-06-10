import React, { useContext } from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Signup from "./signup";
import Entry from "./entry";

import Signin from "./signin";
import hi from "./hi";
import Home from "./home";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

import { Ionicons } from "@expo/vector-icons";
const Drawer = createDrawerNavigator();
const navigation = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "##1B4E9C",
        headerTitleAlign: "center",
        drawerStyle: {
          backgroundColor: "#1B4E9C",
          width: 270,
          marginTop: 25,
          borderRadius: 30,
          borderBottomLeftRadius: 0,
          height: "97%",
          borderTopLeftRadius: 0,
        },
        drawerActiveTintColor: "red",
        drawerActiveBackgroundColor: "white",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="signup" component={Signup} />
      <Drawer.Screen name="hi" component={hi} />

      <Drawer.Screen name="sign in" component={Signin} />
      <Drawer.Screen name="Entry" component={Entry} />
    </Drawer.Navigator>
  );
};

export default navigation;
