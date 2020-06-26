import {SET_LIST_ITEMS} from "../types";

const initialState = {}

const listReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case SET_LIST_ITEMS:
            return {
                ...state,
                [payload.name]: {
                    items: payload.items
                }
            }
        default: return state
    }
}

export default listReducer