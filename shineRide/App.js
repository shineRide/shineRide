import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import Signup from './components/signup'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from "./components/Navigation";
import stackNavigation from "./components/stackNavigation"
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Stack.Navigator  screenOptions={{
        headerShown:false
      }} >
      <Stack.Screen name="navigationn" component={stackNavigation} />
        <Stack.Screen name="Navigation" component={Navigation} />
      
    </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}



