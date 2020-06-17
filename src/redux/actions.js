import {UPDATE_COMPANIES, UPDATE_ITEM_COUNT, UPDATE_PAGE_NUMBER} from "./types";
import {SERVER} from "../config";

const headers = new Headers({
    'Origin': window.location.href
})

const urlWithGetParams = (urlString, params) => {
    const url = new URL(urlString)
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return url.toString()
}

export const fetchCompanies = (pageNumber, pageSize) => {
    const offset = (pageNumber - 1) * pageSize

    const url = SERVER + '/company/list'
    const params = {'offset': offset, 'pageSize': pageSize}

    return async dispatch => {
        const json = await fetch(urlWithGetParams(url, params), {headers})
            .then(response => response.json())
        console.log(urlWithGetParams(url, params))
        dispatch({type: UPDATE_COMPANIES, payload: json.content})
    }
}

export const updateCompanyCount = () => {
    return async dispatch => {
        const json = await fetch(SERVER + '/company/count', {headers})
            .then(response => response.json())
        dispatch({type: UPDATE_ITEM_COUNT, payload: json})
    }
}

export const updatePageNumber = (pageNumber) => {
    return {
        type: UPDATE_PAGE_NUMBER,
        payload: Number(pageNumber)
    }
}