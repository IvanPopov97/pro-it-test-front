import {SERVER} from "../../config";

const headers = new Headers({
    'Content-Type': 'application/json',
    'Origin': window.location.href
})

export const createAction = (type, payload) => ({
    type,
    payload
})

export const createGetRequest = (urlString, params = null) => {
    if (!params)
        return SERVER + urlString
    const url = new URL(SERVER + urlString)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return url.toString()
}

export const calcOffset = (pageNumber, pageSize) => (pageNumber - 1) * pageSize

export const fetchAndDispatch = (url,
                                 params,
                                 mapDataToAction,
                                 actionBeforeFetch) => {
    return async dispatch => {
        if (actionBeforeFetch)
            dispatch(actionBeforeFetch)
        const get = createGetRequest(url, params)
        const json = await fetch(get, {headers})
            .then(response => response.json())
        dispatch(mapDataToAction(json))
    }
}

export const postRequest = (url, object) => {
    console.log(url)
    return fetch(SERVER + url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(object),
    })
}