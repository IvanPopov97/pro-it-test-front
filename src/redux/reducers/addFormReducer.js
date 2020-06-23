import {SET_FORM_ELEMENT_ITEMS} from "../types";

const initialState = {}

const addFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_ELEMENT_ITEMS:
            return {
                ...state,
                [action.payload.formName]: {
                    [action.payload.formItemName]: action.payload.content
                }
            }
        default: return state
    }
}

export default addFormReducer