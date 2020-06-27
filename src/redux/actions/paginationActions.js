import {HIDE_PAGINATION, SET_ITEM_COUNT, SET_PAGE_NUMBER} from "../types";
import {createAction} from "./index";

export const setItemCount = count => createAction(SET_ITEM_COUNT, count)

export const hidePagination = () => ( { type: HIDE_PAGINATION } )

export const setPageNumber = (pageNumber) => {
    return {
        type: SET_PAGE_NUMBER,
        payload: Number(pageNumber)
    }
}