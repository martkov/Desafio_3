import { API_URL_SIGNUP } from "./../../constants/Database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

export const SIGN_UP = "SIGN_UP";

export const signUp = (email, passWord) => {
  return async dispatch => {
    const response = await fetch(API_URL_SIGNUP, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        passWord,
        returnSecureToken: true,
      }),
    });

    /*if (!response.ok) {
      const errorResponse = await response.json();
      const errorID = errorResponse.error.message;

      let message = "No se ha podido registrar";
      if (errorID === "EMAIL_EXISTS") message = "Este email ya está registrado";

      throw new error(message);
    }*/

    const data = await response.json();

    //await AsyncStorage.setItem("@token", data.idToken);
    //await AsyncStorage.setItem("@userId", data.localId);
    

    dispatch({
      type: SIGN_UP,
      token: data.idToken,
      userId: data.localId,
    });
    console.log("paso todo la auth.action");
  };
};
