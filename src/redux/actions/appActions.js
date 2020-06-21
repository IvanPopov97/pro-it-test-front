import {SET_CURRENT_PATH} from "../types";

export const setCurrentPath = path => {
    return {type: SET_CURRENT_PATH, payload: path}
}