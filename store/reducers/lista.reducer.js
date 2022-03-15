import { GET_FONT } from "../actions/lista.action";

const INIITIAL_STATE = {
    list: [],
}
const ListaReducer = (state = INIITIAL_STATE, action) => {
    switch(action.type){
        case GET_FONT:
            return{
                ...state,
                list: action.item,//...................item por payload
            }
            default:
                return state;
    }

}
export default ListaReducer;
