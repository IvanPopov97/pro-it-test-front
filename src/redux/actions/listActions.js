import {createAction} from "./index";
import {SET_LIST_ITEMS} from "../types";

export const setListItems = (modelName, items) => (
    createAction(
        SET_LIST_ITEMS, {
            name: modelName,
            items
        }
    )
)