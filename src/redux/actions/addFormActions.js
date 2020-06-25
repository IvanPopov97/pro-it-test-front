import {
    SET_FORM_ELEMENT_MAPPER,
    SET_FORM_ELEMENT_SHOULD_VALIDATE,
    SET_FORM_ELEMENT_VALIDATION_FUNCTION,
    SET_FORM_ELEMENT_VALUE
} from "../types";

const createAction = (type, formName, formElementName, value) => ({
    type: type,
        payload: {
            formName,
            formElementName,
            content: value
        }
})

export const setValueMapper = (formName, formElementName, mapper) => (
    createAction(
        SET_FORM_ELEMENT_MAPPER,
        formName,
        formElementName,
        mapper
    )
)

export const setValue = (formName, formElementName, value) => (
    createAction(
        SET_FORM_ELEMENT_VALUE,
        formName,
        formElementName,
        value
    )
)

export const setShouldValidate = (formName, formElementName, shouldValidate) => (
    createAction(
        SET_FORM_ELEMENT_SHOULD_VALIDATE,
        formName,
        formElementName,
        shouldValidate
    )
)

export const setValidationFunction = (formName, formElementName, validationFunction) => (
    createAction(
        SET_FORM_ELEMENT_VALIDATION_FUNCTION,
        formName,
        formElementName,
        validationFunction
    )
)