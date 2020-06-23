import {SET_FORM_ELEMENT_CURRENT_ITEM, SET_FORM_ELEMENT_ITEMS} from "../types";

const initialState = {}

const addFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_ELEMENT_ITEMS:
            return {
                ...state,
                [action.payload.formName]: {
                    [action.payload.formItemName]: { items: action.payload.content, current: null }
                }
            }
        case SET_FORM_ELEMENT_CURRENT_ITEM:
            return setFormElementCurrentItem(state, action)
        default: return state
    }
}

const setFormElementCurrentItem = (state, action) => {
    const item = state[action.payload.formName][action.payload.formItemName]
    return {
        ...state,
        [action.payload.formName]: {
            [action.payload.formItemName]: {...item, current: action.payload.content}
        }
    }
}

export default addFormReducer