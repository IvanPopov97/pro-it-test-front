import {HIDE_HEADER_CREATE_BUTTON, SHOW_HEADER_CREATE_BUTTON} from "../types";

export const hideHeaderCreateButton = () => {
    return {type: HIDE_HEADER_CREATE_BUTTON}
}

export const showHeaderCreateButton = () => {
    return {type: SHOW_HEADER_CREATE_BUTTON}
}