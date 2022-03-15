import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { createStore } from "redux";
import Buttom from "../../../components/Buttom";


const incre = {type: "incremented"};
const decre = {type: "decremented"};
const reset = {type: "reseted"};



export default function Count (){

const Counter = (state = 0, action) => {
  switch (action.type) {
    case "incremented":
      return state + 500;  
    case "decremented":
      return state - 500;
    case "reseted":
      return 0;
    default:
      return state
  }
  
};

const store = createStore(Counter);
store.dispatch(incre)
store.getState()
store.subscribe(()=>{ console.log(store.getState())})

return(
  <View>
    <Buttom
    style={styles.btn}
    title="Ingrese 500 pesos"
    onPress={() => store.dispatch(incre)}
  />
  <Buttom
    style={styles.btn}
    title="Reste del total 500"
    onPress={() => store.dispatch(decre)}
  />
  <Buttom
    style={styles.btn}
    title="Vuelva el contador a 0"
    onPress={() => store.dispatch(reset)}
  />
  <Text>Aca debe ir el state del store</Text>
  </View>
  
  )
};

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
});

