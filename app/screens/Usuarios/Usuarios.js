import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import Buttom from "../../../components/Buttom";
import { useDispatch } from "react-redux";
import { addFont } from "../../../store/actions/add.actions";
import ImageSelector from "../../../components/ImageSelector";
import LocatationSelector from "../../../components/LocatationSelector";
import { useSelector } from "react-redux";

export default function Usuarios({navigation}) {
  const dispatch = useDispatch()
  const [title, setTitle] =useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const fontBarrios = useSelector(state => state.fontBarrios.fontBarrios);
  console.log(fontBarrios)

  //........................................................................................
  

  const handleSave = () => {
    dispatch(addFont(title, image, location))
    navigation.navigate('Home') // go back
    console.log(title)
  }
  //.............................................................................

  return (
    
      <ScrollView>
        <View style={styles.container}>
          <Text>datos del Fontanero que quiere recomendar</Text>
          <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          />
          <ImageSelector
          onImageSelected={setImage}
          />
          <LocatationSelector 
          onLocationSelected={setLocation}
          />
          <Buttom 
          style={styles.btn}
          title={"guardar en el listado de fontaneros"}
          onPress={handleSave}
          />
        </View>
        <StatusBar style="auto" />
      </ScrollView>
     
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
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
    padding: 10,
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
