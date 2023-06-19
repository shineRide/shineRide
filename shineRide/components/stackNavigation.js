import { createStackNavigator } from '@react-navigation/stack';
import Entry from './entry';
import Signup from './signup';
import Signin from './signin';

const Stack = createStackNavigator();

const MyStack=()=> {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name="Entry" component={Entry} />
      <Stack.Screen name="SignUp" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}

export default MyStack
