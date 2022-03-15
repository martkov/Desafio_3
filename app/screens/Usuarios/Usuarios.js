import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  FlatList,
  Modal,
  ScrollView,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Buttom from "../../../components/Buttom";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { addPlace } from "../../../store/actions/place.actions";
import * as ImagePicker from 'expo-image-picker';

export default function Usuarios() {
  const dispatch = useDispatch()
  const [title, setTitle] =useState();

  const [pickedUri, setpickeUri]= useState();

  const verifyPermissions = async ()=> {
      const {granted} = await ImagePicker.requestCameraPermissionsAsync()
      if(granted){
        return true;
      }
      Alert.alert(
        'permisos insuficientes',
        [{text:'ok'}]
      )
      return false;
  }

  const handleTakeImage = async () => {
      const isCamaraOk = await verifyPermissions()
      if (!isCamaraOk) return;

      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.8,
      })
  }

  const handleSave = () => {
    dispatch(addPlace(title))
    //navigation.navigate('Home')
    console.log(title)
  }
  

  return (
    <View style={styles.container}>

      <Buttom
        style={styles.btn}
        title="Lista de Fontaneros recomendados en su barrio"
        onPress={() =>
          console.log("Ingreso a su portal de usuario, Bienvenido")
        }
      />
      <ScrollView>
        <View>
          <Text>titulo</Text>
          <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          />
          <Buttom 
          style={styles.btn}
          title={"guardar"}
          onPress={handleSave}

          />
        </View>
      </ScrollView>
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
