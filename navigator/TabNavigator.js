import React from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CartNavigator from "./CartNavigator";
import FontNavigator from "./FontNavigator";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  

  return (
    <Tab.Navigator
      initialRouteName="FontTab"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen 
      name="Inicio" 
      component={FontNavigator} 
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({focused}) => (
          <View>
            <Feather name="home" size={24} color="black" />
          </View>
          
        )
      }}
      />
      <Tab.Screen 
      name="CartTab" 
      component={CartNavigator}
      options={{
        tabBarLabel: "Cart",
        tabBarIcon: ({focused}) => (
          <View  style={{alignItems: "center"}}>
            <MaterialIcons name="contact-phone" size={24} color="black"  />
            <Text>Contacte a su fontanero</Text>
          </View>
        )
      }}
      />
    </Tab.Navigator>
  );
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
    fontSize: 25,
    color: `#000080`,
    textAlign: "center",
  },
  tabBar: {
    backgroundColor: "#98838F",
  },
});

export default TabNavigator;
