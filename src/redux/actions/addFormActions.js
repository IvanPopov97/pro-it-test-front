import {
    SET_FORM_ELEMENT_SHOULD_VALIDATE,
    SET_FORM_ELEMENT_VALIDATION_FUNCTION,
    SET_FORM_ELEMENT_VALUE
} from "../types";


export const setValue = (formName, formElementName, value) => (
    {
        type: SET_FORM_ELEMENT_VALUE,
        payload: {
            formName,
            formElementName,
            content: value
        }
    }
)

export const setShouldValidate = (formName, formElementName, shouldValidate) => (
    {
        type: SET_FORM_ELEMENT_SHOULD_VALIDATE,
        payload: {
            formName,
            formElementName,
            content: shouldValidate
        }
    }
)

export const setValidationFunction = (formName, formElementName, validationFunction) => (
    {
        type: SET_FORM_ELEMENT_VALIDATION_FUNCTION,
        payload: {
            formName,
            formElementName,
            content: validationFunction
        }
    }
)