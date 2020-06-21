import {calcOffset, fetchAndDispatch} from "./index";
import {
    HIDE_PAGINATION, SET_CHILD_ITEMS, SET_ITEM_COUNT,
    SET_LIST_ITEMS,
    SET_ROOT_ITEMS, SWITCH_NODE_STATE
} from "../types";

export const MODEL_NAME = 'companies'

export const fetchCompanies = (pageNumber, pageSize) => {
    const offset = calcOffset(pageNumber, pageSize)
    const params = {'offset': offset, 'pageSize': pageSize}

    return fetchAndDispatch(
        SET_LIST_ITEMS,
        '/company/list',
        params,
        {name: MODEL_NAME}
    )
}

export const updateCompanyCount = () => {
    return fetchAndDispatch(
        SET_ITEM_COUNT,
        '/company/count',
        null,
        null,
        HIDE_PAGINATION
    )
}

export const fetchRootCompanies = () => {
    return fetchAndDispatch(
        SET_ROOT_ITEMS,
        '/company/tree',
        null,
        {name: MODEL_NAME}
    )
}

export const fetchChildCompanies = (parentRecordId, parentId) => {
    return fetchAndDispatch(
        SET_CHILD_ITEMS,
        '/company/tree',
        {'parentId': parentId},
        {id: parentRecordId, name: MODEL_NAME}
    )
}

export const switchCompaniesNodeState = (nodeId) => {
    return {
        type: SWITCH_NODE_STATE,
        payload: {
            id: nodeId,
            name: MODEL_NAME
        }
    }
}