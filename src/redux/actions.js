import {LOADING_STARTED, UPDATE_COMPANIES, UPDATE_EMPLOYEES, UPDATE_ITEM_COUNT, UPDATE_PAGE_NUMBER} from "./types";
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
                          actionTypeBeforeFetch = null) => {
    return async dispatch => {
        if (actionTypeBeforeFetch)
            dispatch({type: actionTypeBeforeFetch})
        const get = createGetRequest(url, params)
        const json = await fetch(get, {headers})
            .then(response => response.json())
        dispatch({type: actionTypeAfterFetch, payload: json})
    }
}

// export const fetchCompanyRootElements = () => {
//     const url = createUrl('/company/tree')
//     return fetchAndDispatch('/company/tree', {type: })
// }

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
        LOADING_STARTED
    )
}

export const updateCompanyCount = () => {
    return fetchAndDispatch(
        UPDATE_ITEM_COUNT,
        '/company/count',
        null,
        LOADING_STARTED
    )
}

export const updatePageNumber = (pageNumber) => {
    return {
        type: UPDATE_PAGE_NUMBER,
        payload: Number(pageNumber)
    }
}