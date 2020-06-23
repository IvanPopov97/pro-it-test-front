import {HIDE_HEADER_CREATE_BUTTON, SHOW_HEADER_CREATE_BUTTON} from "../types";

const initialState = {
    showCreateButton: true
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_HEADER_CREATE_BUTTON:
            return {...state, showCreateButton: true}
        case HIDE_HEADER_CREATE_BUTTON:
            return {...state, showCreateButton: false}
        default: return state
    }
}

export default headerReducer