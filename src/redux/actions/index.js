import {SERVER} from "../../config";

const headers = new Headers({
    'Origin': window.location.href
})

export const createGetRequest = (urlString, params = null) => {
    if (!params)
        return SERVER + urlString
    const url = new URL(SERVER + urlString)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return url.toString()
}

export const calcOffset = (pageNumber, pageSize) => (pageNumber - 1) * pageSize

export const fetchAndDispatch = (actionTypeAfterFetch,
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