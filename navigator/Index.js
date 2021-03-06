import React, { useState, useEffect, StatusBar } from "react";
import { NavigationContainer } from "@react-navigation/native";


import { StyleSheet, View, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { initAuthentication } from "../store/actions/auth.action";


import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator";

const MainNavigator = () => {
  
  const dispatch = useDispatch();
  const userId = useSelector(state => state.auth.userId);

  const [animated, setAnimated] = useState(false);
  const [show] = useState(new Animated.Value(0));
  const [position] = useState(new Animated.Value(700));
  const [font] = useState(new Animated.Value(1));


  useEffect(() => {

    /*
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
    //...........................................*/


    dispatch(initAuthentication());
    
  }, []);

  /*...................................................

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

  //::::::............................................*/

  return (
    
    <NavigationContainer>
      
      {userId
        ? <TabNavigator />
        : <AuthNavigator />}
  
    </NavigationContainer>
  );
}

export default MainNavigator;



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
