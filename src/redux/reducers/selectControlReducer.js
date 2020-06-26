import {ADD_SELECT_CONTROL_ITEM, SET_SELECT_CONTROL_ITEMS} from "../types";

const selectControlReducer = (state = {items: []}, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_SELECT_CONTROL_ITEMS:
            return {items: payload}
        case ADD_SELECT_CONTROL_ITEM:
            return {items: state.items.concat(payload)}
        default: return state
    }
}

export default selectControlReducer