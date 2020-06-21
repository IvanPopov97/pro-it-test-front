import {
    HIDE_PAGINATION, SWITCH_COMPANIES_NODE_STATE, UPDATE_CHILD_COMPANIES,
    UPDATE_COMPANIES,
    UPDATE_EMPLOYEES,
    UPDATE_ITEM_COUNT,
    UPDATE_PAGE_NUMBER, UPDATE_ROOT_COMPANIES
} from "./types";
import {SERVER} from "../config";

const headers = new Headers({
    'Origin': window.location.href
})

const createGetRequest = (urlString, params = null) => {
    if (!params)
        return SERVER + urlString
    const url = new URL(SERVER + urlString)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return url.toString()
}

const calcOffset = (pageNumber, pageSize) => (pageNumber - 1) * pageSize

const fetchAndDispatch = (actionTypeAfterFetch,
                          url,
                          params = null,
                          payload = null,
                          actionTypeBeforeFetch = null) => {
    return async dispatch => {
        if (actionTypeBeforeFetch)
            dispatch({type: actionTypeBeforeFetch})
        const get = createGetRequest(url, params)
        const json = await fetch(get, {headers})
            .then(response => response.json())
        const payloadWithData = payload ? {...payload, content: json} : json
        dispatch({type: actionTypeAfterFetch, payload: payloadWithData})
    }
}

export const fetchRootCompanies = () => {
    return fetchAndDispatch(
        UPDATE_ROOT_COMPANIES,
        '/company/tree'
    )
}

export const fetchChildCompanies = (parentRecordId, parentId) => {
    console.log('!')
    return fetchAndDispatch(
        UPDATE_CHILD_COMPANIES,
        '/company/tree',
        {'parentId': parentId},
        {id: parentRecordId}
    )
}

export const fetchEmployees = (pageNumber, pageSize) => {
    const offset = calcOffset(pageNumber, pageSize)
    const params = {'offset': offset, 'pageSize': pageSize}

    return fetchAndDispatch(
        UPDATE_EMPLOYEES,
        '/employee/list',
        params
    )
}

export const fetchCompanies = (pageNumber, pageSize) => {
    const offset = calcOffset(pageNumber, pageSize)
    const params = {'offset': offset, 'pageSize': pageSize}

    return fetchAndDispatch(
        UPDATE_COMPANIES,
        '/company/list',
        params
    )
}

export const updateEmployeeCount = () => {
    return fetchAndDispatch(
        UPDATE_ITEM_COUNT,
        '/employee/count',
        null,
        null,
        HIDE_PAGINATION
    )
}

export const updateCompanyCount = () => {
    return fetchAndDispatch(
        UPDATE_ITEM_COUNT,
        '/company/count',
        null,
        null,
        HIDE_PAGINATION
    )
}

export const switchCompaniesNodeState = (nodeId) => {
    return {
        type: SWITCH_COMPANIES_NODE_STATE,
        payload: nodeId
    }
}

export const updatePageNumber = (pageNumber) => {
    return {
        type: UPDATE_PAGE_NUMBER,
        payload: Number(pageNumber)
    }
}