import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
  Modal,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttom from "../../../components/Buttom";

export default function Usuarios() {
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
      <Text style={[styles.container, styles.title]}>miFontanero App</Text>
      <View style={styles.inputContainer}>
        <View style={styles.password}>
          <TextInput
            style={[styles.input]}
            placeholder="ingrese aqui su usuario"
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
          <Text>{" \n Confirme \n el usuario \n "}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.value}</Text>
            <Text>{"no es su usuario ? \n borrelo presionando la X"} </Text>
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

      <Buttom
        style={styles.btn}
        title="Ingreso a su portal de usuario"
        onPress={() => console.log("Ingreso a su portal de usuario, Bienvenido")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: `#00bfff`,
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  password: {
    flexDirection: "column",
  },

  item: {
    padding: 20,
    marginVertical: 20,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 15,
    backgroundColor: `#7fffd4`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: 100,
    marginBottom: 50,
    borderRadius: 10,
  },
});
