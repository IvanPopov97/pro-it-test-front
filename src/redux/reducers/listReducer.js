import {SET_LIST_ITEMS} from "../types";

const initialState = {}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST_ITEMS:
            return {
                ...state,
                [action.payload.name]: {
                    items: action.payload.content.content
                }
            }
        default: return state
    }
}

export default listReducer