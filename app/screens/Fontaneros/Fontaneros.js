import React, { useState } from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Modal,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Buttom from "../../../components/Buttom";
import Colors from "../../../constants/Colors";

import { useDispatch } from "react-redux";
import { confirmFont } from "../../../store/actions/regisFont.action";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "debe tener mas de 2 caracteres")
    .max(30, "No puede ocupar mas de 30 caracteres")
    .required("Este campo debe ser completado"),
  phone: Yup.string()
    .min(10, "el minimo es de 10 caracteres")
    .max(20, "no puede ser un numero con mas de 20 caracteres")
    .required("Este campo debe ser completado"),
});

const widht = Dimensions.get("window").width;

const Fontaneros = ({ navigation }) => {

  const dispatch = useDispatch(); //.......................para ingresar a Firebase

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
    dispatch(confirmFont(item))//..............................ingreso de datos a Firebase
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
      <Formik
        /*initialValues={{ name: "", phone: "" }}*/
        validationSchema={SignupSchema}
        /*onSubmit={handlerSubmit}*/
      >
        <View style={styles.inputContainer}>
          <View style={styles.password}>
            <TextInput
              style={[styles.input]}
              placeholder="ingrese aqui el nombre y el numero de telefono"
              value={textInput}
              onChangeText={handleChangeText}
            />
          </View>
          <Buttom
            style={styles.btn}
            title="Ingrese al nuevo fontanero"
            activeOpacity={0.7}
            onPress={handleOnPress}
          />
        </View>
      </Formik>
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.value}</Text>
            <Text>{"Ingreselo presionando el OK"}</Text>
            <Button onPress={handleOnDelete(item)} title="O.K" />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <Modal animationType="slide" visible={modalVisible}>
        <View>
          <View>
            <Text>Ha sido agregado con exito !!!</Text>
            <Text>{itemSelected.value}</Text>
          </View>
          <View>
            <Button onPress={handleConfirmDelete} title="CONFIRMAR Y RETORNAR" />
          </View>
        </View>
      </Modal>

      <Buttom
        style={styles.btn}
        title="Aqui puede ver que son las categorias de fontanero"
        onPress={() => navigation.navigate("Categorias")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#00bfff`,
  },
  scroll: {
    paddingHorizontal: 15,
  },
  form: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: `#87cefa`,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  text: {
    backgroundColor: `#b0c4de`,
    fontWeight: "bold",
    height: 30,
  },
  btn_txt: {
    fontSize: 15,
    color: "#000080",
    fontWeight: "bold",
  },
  erro: {
    fontWeight: "bold",
    fontSize: 13,
    color: `#ffa500`,
  },
});

export default Fontaneros;
