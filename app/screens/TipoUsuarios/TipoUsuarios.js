import React from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";


import {TIPOCLIENTES} from './../../../data/tipoclientes';

function TipoUsuarios({navigation, route}){

    
    return(
        <Text>hola</Text>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    info: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    title: {
      fontSize: 20,
      marginBottom: 10,
    },
  })

  export default TipoUsuarios