import {SET_FORM_ELEMENT_VALUE, SET_FORM_ELEMENT_ITEMS, SET_FORM_ELEMENT_VALIDATION_FUNCTION} from "../types";

const initialState = {}

const addFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_ELEMENT_ITEMS:
            return updateState(
                state,
                action,
                items => ({
                    items, value: null
                })
            )
        case SET_FORM_ELEMENT_VALUE:
            return updateState(
                state,
                action,
                (value, element) => ({
                    value,
                    valid: element.validate ? element.validate(value) : true
                })
            )
        case SET_FORM_ELEMENT_VALIDATION_FUNCTION:
            return updateState(
                state,
                action,
                validate => ({validate})
            )

        default: return state
    }
}

const extractFormElemValue = (state, action) => {
    const form = state[action.payload.formName] || {}
    const element = form[action.payload.formElementName] || {}
    return [form, element, action.payload.content]
}

const updateState = (state, action, update) => {
    const [form, element, value] = extractFormElemValue(state, action)
    return {
        ...state,
        [action.payload.formName]: {
            ...form,
            [action.payload.formElementName]: {
                ...element,
                ...update(value, element)
            }
        }
    }
}

export default addFormReducer