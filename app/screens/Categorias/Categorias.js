import React from 'react';
import { FlatList } from 'react-native';
import GridItem from './../../../components/GridItem';   
import { CATEGORIES } from '../../../data/categories';


function Categorias({ navigation }) {
  const handlePress = (item) => {
    navigation.navigate('TipoUsuarios', { 
      name: item.title,
      categoryID: item.id,
    })
  }

  const renderItem = ({ item }) => (
    <GridItem
      item={item}
      onSelected={handlePress}
    />
  )

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  )
}

export default Categorias