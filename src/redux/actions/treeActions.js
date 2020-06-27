import {createAction} from "./index";
import {SET_CHILD_ITEMS, SET_ROOT_ITEMS, SWITCH_NODE_STATE} from "../types";

export const switchNodeState = (modelName, nodeId) => (
    createAction(SWITCH_NODE_STATE, {
        id: nodeId,
        name: modelName
    })
)

export const setChildItems = (modelName, parentRecordId, items) => (
    createAction(
        SET_CHILD_ITEMS, {
            id: parentRecordId,
            name: modelName,
            items
        }
    )
)

export const setRootItems = (modelName, items) => (
    createAction(
        SET_ROOT_ITEMS, {
            name: modelName,
            items
        }
    )
)