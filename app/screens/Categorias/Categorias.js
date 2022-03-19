import React from "react";
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Button,
  Text,
} from "react-native";
import Buttom from "../../../components/Buttom";
import { useSelector, useDispatch } from "react-redux";
import GridItem from "./../../../components/GridItem";
import { selectCategory } from "./../../../store/actions/category.action";
import { TextInput } from "react-native-gesture-handler";

function Categorias({ navigation }) {
  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  const handlePress = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("TipoFontaneros", {
      name: item.title,
    });
  };

  const renderItem = ({ item }) => (
    <GridItem item={item} onSelected={handlePress} />
    //:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  );

  return (
    <View style={styles.container}>
        
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
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

export default Categorias;
