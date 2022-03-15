import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../app/screens/Cart/CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacte a su fontanero" component={CartScreen} />
    </Stack.Navigator>
  )
}

export default CartNavigator;