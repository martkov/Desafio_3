import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import Usuarios from "../app/screens/Usuarios";
import Fontaneros from "../app/screens/Fontaneros/Fontaneros";
import Home from "../app/screens/Home/Home";
import Categorias from "../app/screens/Categorias/Categorias";
import TipoUsuarios from "../app/screens/TipoUsuarios";

const Stack = createNativeStackNavigator();

function FontNavigator() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        animated={true}
        backgroundColor={`#7fffd4`}
        barStyle={"ligth-content"}
      />

      <Stack.Navigator screenOptions={{ headerStyle: styles.header }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "MiFontanero App" }}
        />
        <Stack.Screen
          name="Usuarios"
          component={Usuarios}
          options={{ title: "Panel del Usuario" }}
        />
        <Stack.Screen
          name="Fontaneros"
          component={Fontaneros}
          options={{ title: "Lista de Fontaneros" }}
        />

        <Stack.Screen
          name="Categorias"
          component={Categorias}
          options={{ title: "Categorias de Fontaneros" }}
        />
        <Stack.Screen
          name="TipoUsuarios"
          component={TipoUsuarios}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
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
  header: {
    backgroundColor: `#7fffd4`,
  },
});

export default FontNavigator;
