import {SET_PAGE_NUMBER} from "../types";


export const setPageNumber = (pageNumber) => {
    return {
        type: SET_PAGE_NUMBER,
        payload: Number(pageNumber)
    }
}