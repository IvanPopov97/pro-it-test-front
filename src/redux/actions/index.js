import {SERVER} from "../../config";

const headers = new Headers({
    'Content-Type': 'application/json',
    'Origin': window.location.href
})

export const createAction = (type, payload) => ({
    type,
    payload
})

export const createGetRequest = (urlString, params) => {
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
            .catch(() => {console.log('Не удалось загрузить данные')})
        if (json)
            dispatch(mapDataToAction(json))
    }
}

// export const post = (url, object) => {
//     //console.log(object)
//     return async () => {
//         console.log('???')
//         return await postRequest(url, object).catch(() => {
//             console.log('Не удалось отправить данные')
//         })
//     }
// }

export const postAndDispatch = (url,
                                object,
                                mapResponseToAction,
                                actionBeforePost) => {
    //console.log(object)
    return async dispatch => {
        if (actionBeforePost)
            dispatch(actionBeforePost)
        //console.log('!!!')
        const response = await postRequest(url, object).catch(() => {console.log('Не удалось отправить данные')})
        //console.log(response)
        if (response && response.ok) {
            const json = await response.json()
            if (json && mapResponseToAction)
                dispatch(mapResponseToAction(json))
        }
    }
}

export const postRequest = (url, object) => {
    //console.log(url)
    return fetch(SERVER + url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(object),
    })
}