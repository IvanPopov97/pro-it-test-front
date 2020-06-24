import {SET_FORM_ELEMENT_VALUE, SET_FORM_ELEMENT_ITEMS} from "../types";

const initialState = {}

const addFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_ELEMENT_ITEMS:
            return {
                ...state,
                [action.payload.formName]: {
                    [action.payload.formElementName]: { items: action.payload.content, value: null }
                }
            }
        case SET_FORM_ELEMENT_VALUE:
            return setFormElementValue(state, action)
        default: return state
    }
}

const setFormElementValue = (state, action) => {
    const item = state[action.payload.formName][action.payload.formElementName]
    return {
        ...state,
        [action.payload.formName]: {
            ...state[action.payload.formName],
            [action.payload.formElementName]: {...item, value: action.payload.content}
        }
    }
}

export default addFormReducer