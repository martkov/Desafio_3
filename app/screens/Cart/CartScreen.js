import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { createStore } from "redux";
import Buttom from "../../../components/Buttom";
import Counter from "./Counter";

function CartScreen({}) {
  return (
    <View>
      <Text>
        Cuanto estaria dispuesto a pagar por la visita del Fontanero ?{" "}
      </Text>
      <Text>Monto estimado .....</Text>
      <Counter/>
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

    height: 50,
    borderRadius: 100,
    bottom: -30,
    right: 10,
    alignSelf: "flex-end",
  },
  image: {
    width: 250,
    height: 150,
  },
});

export default CartScreen;
