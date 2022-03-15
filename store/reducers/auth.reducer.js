import { SIGN_UP } from "../actions/auth.action";

const INITIAL_STATE = {
    token: null,
    userId: null,
}

const AuthReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_UP:
            return{
                ...state,
                token: action.token,
                userId: action.userId,
            }
        default:
            return state;
    }
}

export default AuthReducer;