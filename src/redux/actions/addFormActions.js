import {SET_FORM_ELEMENT_VALIDATION_FUNCTION, SET_FORM_ELEMENT_VALUE} from "../types";

export const setValue = (formName, formElementName, value) => {
    return {
        type: SET_FORM_ELEMENT_VALUE,
        payload: {
            formName,
            formElementName,
            content: value
        }
    }
}

export const setValidationFunction = (formName, formElementName, validationFunction) => {
    return {
        type: SET_FORM_ELEMENT_VALIDATION_FUNCTION,
        payload: {
            formName,
            formElementName,
            content: validationFunction
        }
    }
}