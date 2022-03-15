import React, { useEffect } from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import Buttom from "../../../components/Buttom";
import { signUp } from "./../../../store/actions/auth.action";
import Input from "../../../components/Input";

const widht = Dimensions.get("window").width;

function AuthScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  };

  const title = "R E G I S T R O",
    message = "Ya tienes cuenta ?",
    messageRegistro = " R E G I S T R A R S E",
    messageAction = "Ingresar",
    messageTarget = "login";

  const handleInputChange = (id, value, isValid) => {
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(isValid);
  };

  const [loaded] = useFonts({
    /*......el fonts va sobre el return ......*/
    Acme: require("./../../../assets/fonts/Acme-Regular.ttf"),
  });
  if (!loaded) return <AppLoading />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>U s u a r i o</Text>
      <TextInput
        style={[styles.input]}
        placeholder="ingrese aqui su Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.title}>C l a v e</Text>
      <TextInput
        style={[styles.input]}
        placeholder="ingrese aqui su clave"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Buttom title={messageRegistro} onPress={handleSignUp} />
      <View>
        <Text style={styles.title}>{message}</Text>
        <Buttom title={messageAction} />
      </View>
      <Image
        style={styles.image}
        source={require("../../../assets/MiFontanero.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
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
    alignSelf: "center",
  },
  input: {
    backgroundColor: `#87cefa`,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: "Acme",
    alignSelf: "center",
    padding: 20,
  },
});

export default AuthScreen;
