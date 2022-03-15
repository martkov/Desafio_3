import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { useRoute } from "@react-navigation/native";
import { TIPOCLIENTES } from "../../../data/tipoclientes";



function TipoFontaneros() {
  const route = useRoute();
  const cliente = TIPOCLIENTES.find(
    (item) => item.id === route.params.tipoclientesID
  );
  return (
    <View style={styles.container}>
      <View style={styles.info}>
          <Text>Procesando la informacion necesaria</Text>
         
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default TipoFontaneros;