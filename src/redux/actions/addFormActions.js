import {SET_FORM_ELEMENT_VALUE} from "../types";

export const setFormElementCurrentValue = (formName, formElementName, currentValue) => {
    return {
        type: SET_FORM_ELEMENT_VALUE,
        payload: {
            formName,
            formElementName,
            content: currentValue
        }
    }
}