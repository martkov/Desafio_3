import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttom from "../../../components/Buttom";


const widht = Dimensions.get("window").width;

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Buttom
        style={styles.btn}
        onPress={() => navigation.navigate("Fontaneros")}
      >
        <Text>Agregar Fontanero</Text>
      </Buttom>
      <Buttom
        style={styles.btn}
        onPress={() => navigation.navigate("Destinos")}
      >
        <Text>{"Ingrese a su pagina de usuario"}</Text>
      </Buttom>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: `#00bfff`,
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 15.19,
    elevation: 23,

    elevation: 5,
    padding: 5,
    display: "flex",
    position: "relative",
    backgroundColor: `#7fffd4`,
    justifyContent: "center",
    alignItems: "center",
    width: widht / 3,
    height: 50,
    borderRadius: 100,
    bottom: -30,
    right: 10,
    alignSelf: "flex-end",
  },
});
