import {HIDE_PAGINATION, SET_ITEM_COUNT, SET_PAGE_NUMBER} from "../types";
import {range} from "./index";

const linkCount = 9

const initialState = {
    itemsCount: 0,
    isHidden: true,
    pageCount: 0,
    pageSize: 5,
    pageNumber: 1,
    links: [],
    first: true,
    last: true
}

const getPageCount = (itemsCount, pageSize) => Math.ceil(itemsCount / pageSize)

const getLinks = (pageNumber, linkCount, pageCount) => {
    let leftLink = Math.max(1, pageNumber - Math.floor(linkCount / 2))
    let rightLink = leftLink + linkCount - 1

    if (rightLink > pageCount) { // если страниц слишком мало
        const bias = rightLink - pageCount
        rightLink = pageCount
        leftLink = Math.max(1, leftLink - bias)
    }

    return range(leftLink, rightLink + 1)
}

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIDE_PAGINATION:
            return {...state, isHidden: true}
        case SET_ITEM_COUNT:
            return setItemCount(state, action)
        case SET_PAGE_NUMBER:
            return setPageNumber(state, action)
        default: return state;
    }
}

const setItemCount = (state, action) => {
    const pageCount = getPageCount(action.payload, state.pageSize)
    const pageNumber = Math.min(pageCount, state.pageNumber)
    return {...state,
        itemsCount: action.payload,
        isHidden: false,
        pageCount: pageCount,
        pageNumber: pageNumber,
        first: pageNumber === 1,
        last: pageNumber === pageCount,
        links: getLinks(
            pageNumber,
            linkCount,
            pageCount
        )
    };
}

const setPageNumber = (state, action) => {
    const pageNumber = state.isHidden
        ? action.payload
        : Math.min(state.pageCount, action.payload)
    return {...state,
        pageNumber: pageNumber,
        first: pageNumber === 1,
        last: pageNumber === state.pageCount,
        links: getLinks(
            pageNumber,
            linkCount,
            state.pageCount
        )
    }
}

export default paginationReducer