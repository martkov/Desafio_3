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
import Buttom from "../../../components/Buttom";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";




const widht = Dimensions.get("window").width;

export default function Home({ navigation }) {
  
  

  const [textInput, setTextInput] = useState("");
  const [itemList, setItemList] = useState([]);

  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleChangeText = (text) => {
    setTextInput(text);
  };

  const handleOnPress = () => {
    setTextInput("");
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ]);
  };

  const handleOnDelete = (item) => () => {
    setModalVisible(true);
    setItemSelected(item);
  };

  const handleConfirmDelete = () => {
    const { id } = itemSelected;
    setItemList(itemList.filter((item) => item.id !== id));
    setModalVisible(false);
    setItemSelected({});
  };

  console.log(textInput);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/MiFontanero.png")}
      />
      <Text style={styles.title}>{"Si aun no esta registrado \n  registrese aqui debajo"}</Text>
      <View style={styles.inputContainer}>
        <View style={styles.password}>
          <TextInput
            style={[styles.input]}
            placeholder="ingrese aqui su nombre de usuario"
            value={textInput}
            onChangeText={handleChangeText}
          />
          <TextInput
            style={[styles.input]}
            placeholder="ingrese aqui su contraseña"
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.7}
          onPress={handleOnPress}
        >
          <Text>{"  Registre \n sus datos"}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.value}</Text>
            <Text>
              {
                "desea borrar \n su nombre de usuario ? \n borrelo presionando la X"
              }{" "}
            </Text>
            <Button onPress={handleOnDelete(item)} title="X" />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal animationType="slide" visible={modalVisible}>
        <View>
          <View>
            <Text>¿Está seguro que desea eliminar?</Text>
            <Text>{itemSelected.value}</Text>
          </View>
          <View>
            <Button onPress={handleConfirmDelete} title="CONFIRMAR" />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />

      <Buttom
        style={styles.btn}
        onPress={() => navigation.navigate("Fontaneros")}
      >
        <Text>Agregar Fontanero</Text>
      </Buttom>
      <Buttom
        style={styles.btn}
        onPress={() => navigation.navigate("Usuarios")}
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
  image: {
    width: 250,
    height: 150,
  },
  title:{
    fontSize: 18,
  },
 
});
