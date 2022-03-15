import { TIPOCLIENTES } from '../../data/tipoclientes';

const INITIAL_STATE = {
    list: TIPOCLIENTES,
    selected: null,
    filteredList: [],
}

const FontaneroReducer = (state = INITIAL_STATE , action) =>{
    return state;
}
 export default FontaneroReducer;