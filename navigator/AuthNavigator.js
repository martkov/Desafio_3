import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../app/screens/Auth/AuthScreen";

const Stack = createNativeStackNavigator()

function AuthNavigator(){
    return (
    <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{ headerShow: false }}
    >
        <Stack.Screen name= "Auth" component={AuthScreen}/>
    </Stack.Navigator>
    );
}

export default AuthNavigator;