import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import CategoryReducer from "./reducers/category.reducer";
import FontaneroReducer from "./reducers/fontanero.reducer";
import ListaReducer from "./reducers/lista.reducer";
import AuthReducer from "./reducers/auth.reducer";
import AddReducer from "./reducers/add.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    fontaneros: FontaneroReducer,
    listaFontaneros: ListaReducer,//....................
    auth: AuthReducer,
    fontBarrios: AddReducer,  
})

export default createStore(RootReducer, applyMiddleware(thunk));