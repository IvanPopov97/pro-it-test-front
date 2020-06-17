import {LOADING_STARTED, UPDATE_ITEM_COUNT, UPDATE_PAGE_NUMBER} from "./types";

const linkCount = 9

const initialState = {
    itemsCount: 0,
    itemsCountUpdated: false,
    pageCount: 0,
    pageSize: 5,
    pageNumber: 1,
    links: [],
    first: true,
    last: true
}

const getPageCount = (itemsCount, pageSize) => Math.ceil(itemsCount / pageSize)

const range = (a, b) => Array(b - a + 1).fill(null).map((elem, i) => i + a)

const getLinks = (pageNumber, linkCount, pageCount) => {
    let leftLink = Math.max(1, pageNumber - Math.floor(linkCount / 2))
    let rightLink = leftLink + linkCount - 1

    if (rightLink > pageCount) { // если страниц слишком мало
        const bias = rightLink - pageCount
        rightLink = pageCount
        leftLink = Math.max(1, leftLink - bias)
    }

    return range(leftLink, rightLink)
}

const paginationReducer = (state = initialState, action) => {
    let pageNumber;
    switch (action.type) {
        case LOADING_STARTED:
            return {...state, first: true, last: true, itemsCountUpdated: false}
        case UPDATE_ITEM_COUNT:
            const pageCount = getPageCount(action.payload, state.pageSize)
            pageNumber = Math.min(pageCount, state.pageNumber)
            return {...state,
                itemsCount: action.payload,
                itemsCountUpdated: true,
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
        case UPDATE_PAGE_NUMBER:
            pageNumber = state.itemsCountUpdated
                ? Math.min(state.pageCount, action.payload)
                : action.payload
            return {...state,
                pageNumber: pageNumber,
                first: pageNumber === 1 || !state.itemsCountUpdated,
                last: pageNumber === state.pageCount || !state.itemsCountUpdated,
                links: getLinks(
                    pageNumber,
                    linkCount,
                    state.pageCount
                )
            }
        default: return state;
    }
}

export default paginationReducer