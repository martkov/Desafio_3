import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({label}){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <TextInput
                {...props}
                style={styles.input}
            />

        </View>
    )
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

  export default Input;