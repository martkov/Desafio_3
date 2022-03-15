import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import GridItem from './../../../components/GridItem';
import {selectCategory} from './../../../store/actions/category.action';


function Categorias({ navigation }) {
  const dispatch = useDispatch();
  const categories = useSelector(state=> state.categories.list)


  const handlePress = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('TipoFontaneros', { 
      name: item.title,
      
    });
  }

  const renderItem = ({ item }) => (
    <GridItem
      item={item}
      onSelected={handlePress}
    />
  )
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  )
}

export default Categorias