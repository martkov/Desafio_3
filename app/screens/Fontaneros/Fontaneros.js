import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const Fontaneros = () => {
  const [error, setError] = useState("");

  const handlerSubmit = async (values) => {
    setError("");
    try {
      let fontaneros = [];
      const value = await AsyncStorage.getItem("fontaneros");
      if (value) {
        fontaneros = JSON.parse(value);
            if (
              fontaneros.find((item) => item.phone.trim() === values.phone.trim())
            ) {
              return setError("el valor esta duplicado");
            } else {
              fontaneros.push({ ...values, phone: item.cod.trim() });
              const json_value = Json.stringify(fontaneros);
              await AsyncStorage.setItem("fontaneros", json_value);
            }
      } else {
        fontaneros.push(values);
        const json_value = JSON.stringify(fontaneros);
        await AsyncStorage.setItem("fontaneros", json_value);
      }
    } catch (error) {
      AsyncStorage.removeItem("fontaneros");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Formik
          initialValues={{ name: "", phone: "" }}
          validationSchema={SignupSchema}
          onSubmit={handlerSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View style={styles.form}>
                <Text style={styles.text}>Nombre y Apellido</Text>
                <TextInput
                  style={styles.input}
                  placeholder="coloque aqui el nombre y apellido"
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <Text style={styles.erro}>{errors.name}</Text>
                ) : null}
              </View>
              <View>
                <Text style={styles.text}>telefono</Text>
                <TextInput
                  style={styles.input}
                  placeholder="coloque aqui el numero de telefono"
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                />
                {errors.phone && touched.phone ? (
                  <Text style={styles.erro}>{errors.phone}</Text>
                ) : null}
              </View>
              <View style={styles.buttom}>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.7}
                  onPress={handleSubmit}
                >
                  <Text style={styles.btn_txt}>Guarde datos del Fontanero {"\n"}que va a contactar</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  btn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: `#7fffd4`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 50,
    borderRadius: 10,
  },
  btn_txt: {
    fontSize: 15,
    color: "#000080",
    fontWeight: "bold",
    alignItems: "center",
  },
  erro: {
    fontWeight: "bold",
    fontSize: 13,
    color: `#ffa500`,
  },
});

export default Fontaneros;

