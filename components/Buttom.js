import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function Buttom({ title, onPress, color, children }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.btn }}>
      <Text>{title}</Text>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop:25,
    
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
    height: 30,
    marginBottom: 10,
    borderRadius: 10,
    
  },
 
});

export default Buttom;