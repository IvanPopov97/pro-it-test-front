import {ADD_SELECT_CONTROL_ITEM, SET_SELECT_CONTROL_ITEMS} from "../types";

//const initialState = {items: []}

const selectControlReducer = (state = {}, action) => {
    const {type, payload} = action
    switch (type) {
        // case INITIALIZE_SELECT_CONTROL:
        //     return {...state, [payload.name]: initialState}
        case SET_SELECT_CONTROL_ITEMS:
            console.log(payload)
            return {...state, [payload.name]: {items: payload.items}}
            //return {items: payload}
        case ADD_SELECT_CONTROL_ITEM:
            return {...state, [payload.name]: {items: state[payload.name].concat(payload.item)}}
            //return {items: state.items.concat(payload)}
        default: return state
    }
}

export default selectControlReducer