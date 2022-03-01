import { createNativeStackNavigator } from "@react-navigation/native-stack";


import MainNavigator from "./navigator/Index";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    
        <MainNavigator />
  
  )
}


