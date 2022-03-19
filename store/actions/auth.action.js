import { API_URL_SIGNUP } from "./../../constants/Database";


export const SIGNUP = "SIGNUP";

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

    const data = await response.json();
   
    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
    console.log("paso todo la action del SIGNUP");
  };
};
