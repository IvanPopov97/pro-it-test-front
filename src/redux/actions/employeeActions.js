import {calcOffset, fetchAndDispatch} from "./index";
import {
    HIDE_PAGINATION, SET_CHILD_ITEMS, SET_ITEM_COUNT,
    SET_LIST_ITEMS,
    SET_ROOT_ITEMS, SWITCH_NODE_STATE
} from "../types";

export const MODEL_NAME = 'employees'

export const fetchEmployees = (pageNumber, pageSize) => {
    const offset = calcOffset(pageNumber, pageSize)
    const params = {'offset': offset, 'pageSize': pageSize}

    return fetchAndDispatch(
        SET_LIST_ITEMS,
        '/employee/list',
        params,
        {name: MODEL_NAME},
        null,
        object => object.content
    )
}

export const updateEmployeeCount = () => {
    return fetchAndDispatch(
        SET_ITEM_COUNT,
        '/employee/count',
        null,
        null,
        HIDE_PAGINATION
    )
}

export const fetchRootEmployees = () => {
    return fetchAndDispatch(
        SET_ROOT_ITEMS,
        '/employee/tree',
        null,
        {name: MODEL_NAME}
    )
}

export const fetchChildEmployees = (parentRecordId, parentId) => {
    return fetchAndDispatch(
        SET_CHILD_ITEMS,
        '/employee/tree',
        {'parentId': parentId},
        {id: parentRecordId, name: MODEL_NAME}
    )
}

export const switchEmployeesNodeState = (nodeId) => {
    return {
        type: SWITCH_NODE_STATE,
        payload: {
            id: nodeId,
            name: MODEL_NAME
        }
    }
}