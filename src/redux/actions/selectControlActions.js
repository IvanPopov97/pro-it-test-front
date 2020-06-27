import {createAction} from "./index";
import {ADD_SELECT_CONTROL_ITEM, SET_SELECT_CONTROL_ITEMS} from "../types";

export const addSelectControlItem = (modelName, item) => (
    createAction(ADD_SELECT_CONTROL_ITEM, {name: modelName, item})
)

export const setSelectControlItems = (modelName, items) => (
    createAction(
        SET_SELECT_CONTROL_ITEMS, {
            name: modelName,
            items
        }
    )
)