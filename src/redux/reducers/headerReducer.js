import {HIDE_HEADER_CREATE_BUTTON, SHOW_HEADER_CREATE_BUTTON} from "../types";

const initState = {
    showCreateButton: true
}

const headerReducer = (state = initState, action) => {
    switch (action.type) {
        case SHOW_HEADER_CREATE_BUTTON:
            return {...state, showCreateButton: true}
        case HIDE_HEADER_CREATE_BUTTON:
            return {...state, showCreateButton: false}
        default: return state
    }
}

export default headerReducer