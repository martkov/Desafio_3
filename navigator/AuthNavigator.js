import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../app/screens/Auth/AuthScreen";
import LoginScreen from './../app/screens/Auth/LoginScreen'
import RegisterScreen from './../app/screens/Auth/RegisterScreen';


const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );

export default AuthNavigator;