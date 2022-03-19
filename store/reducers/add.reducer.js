import { ADD_FONT } from './../actions/add.actions';
import FontBarrio from '../models/FontBarrio';

const initialState = {
    fontBarrios: []
}

const AddReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FONT:
            const fontBarrio = new FontBarrio(
                Date.now(),
                action.payload.title,
                action.payload.image,
                action.payload.address,
                action.payload.lat,
                action.payload.lng,
            )
            return {
                ...state,
                fontBarrios: state.fontBarrios.concat(fontBarrio),
            }
        default:
            return state
    } 
}

export default AddReducer;