import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Animated } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Home from "./app/screens/Home";
import Destinos from "./app/screens/Destinos";
import Fontaneros from "./app/screens/Fontaneros";


const Stack = createNativeStackNavigator();

export default function App() {
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
          source={require("./assets/MiFontanero.png")}
        />
        <StatusBar
          animated={true}
          backgroundColor={`#7fffd4`}
          barStyle={"ligth-content"}
        />
      </View>
    );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={`#7fffd4`}
        barStyle={"ligth-content"}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Mis Fontaneros" }}
          />
          <Stack.Screen
            name="Destinos"
            component={Destinos}
            options={{ title: "Ingreso a la Aplicacion" }}
          />
          <Stack.Screen
            name="Fontaneros"
            component={Fontaneros}
            options={{ title: "Agregar fontanero" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
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
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontSize: 40,
    color: `#000080`,
    textAlign: "center",
  },
});
