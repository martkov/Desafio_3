import React from 'react';
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CartNavigator from "./CartNavigator";
import FontNavigator from "./FontNavigator";


const Tab = createBottomTabNavigator();

function TabNavigator(){

    const [animated, setAnimated] = useState(false);
    const [show] = useState(new Animated.Value(0));
    const [position] = useState(new Animated.Value(700));
    const [font] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(show, {
        toValue: 1,
        duration: 1000,
        delay: 3000,
        useNativeDriver: false,
      }),
      Animated.timing(position, {
        toValue: -100,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      Animated.timing(font, {
        toValue: 200,
        duration: 2000,
        useNativeDriver: false,
      }).start(() => setAnimated(true));
    });
  }, []);

  if (!animated)
    return (
      <View style={styles.container}>
        <Animated.Text
          style={[styles.text, { opacity: show, transform: [{ scale: font }] }]}
        >
          {"miFontanero \n App"}
        </Animated.Text>
        <Animated.Image
          style={(styles.image, { top: position })}
          source={require("../assets/MiFontanero.png")}
        />
        <StatusBar
          animated={true}
          backgroundColor={`#7fffd4`}
          barStyle={"ligth-content"}
        />
      </View>
    ); 

    return(
        <Tab.Navigator initialRouteName="FontTab">
            <Tab.Screen name='Inicio' component={FontNavigator}/>
            <Tab.Screen name='CartTab' component={CartNavigator}/>
        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: `#00bfff`,
      alignItems: "center",
      justifyContent: "space-around",
    },
    image: {
      width: 50,
      height: 50,
      resizeMode: "contain",
    },
    text: {
      fontSize: 40,
      color: `#000080`,
      textAlign: "center",
    },
});


export default TabNavigator;