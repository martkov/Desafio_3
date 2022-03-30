import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import store from "./store";

import MainNavigator from "./navigator/Index";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <Provider store={store}>
        <MainNavigator />
    </Provider>
    
  )
}


