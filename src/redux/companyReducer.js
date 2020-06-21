import {
    SWITCH_COMPANIES_NODE_STATE, UPDATE_CHILD_COMPANIES,
    UPDATE_COMPANIES,
    UPDATE_ROOT_COMPANIES
} from "./types";

const initialState = {
    companies: [],
    rootCompaniesId: []
}

const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_COMPANIES_NODE_STATE:
            return switchCompaniesNodeState(state, action)
        case UPDATE_ROOT_COMPANIES:
            return {
                ...state,
                companies: action.payload.map(
                    company => ({...company, isOpened: false, childCompaniesId: []})
                ),
                rootCompaniesId: range(0, action.payload.length)
            }
        case UPDATE_CHILD_COMPANIES:
            return updateChildCompanies(state, action)
        case UPDATE_COMPANIES:
            return {...state, rootCompaniesId: [], companies: action.payload.content}
        default: return state
    }
}

const range = (a, b) => Array(b - a)
    .fill(null)
    .map((elem, i) => i + a)

const switchCompaniesNodeState = (state, action) => {
    const nodeId = action.payload
    const updatedNode = {
        ...state.companies[nodeId],
        isOpened: !state.companies[nodeId].isOpened
    }
    const updatedCompanies = Object.assign(
        [...state.companies],
        {[nodeId] : updatedNode}
        )
    return {...state, companies: updatedCompanies}
}

const updateChildCompanies = (state, action) => {
    const childCompanies = action.payload.content.map(
        childCompany => ({
            ...childCompany,
            isOpened: false,
            childCompaniesId: []
        })
    )

    const childCompaniesId = range(
        state.companies.length,
        state.companies.length + childCompanies.length
    )

    const parentId = action.payload.id
    const updatedParent = {
        ...state.companies[parentId],
        childCompaniesId: childCompaniesId
    }

    const updatedCompanies = Object.assign(
        state.companies.concat(childCompanies),
        {[parentId]: updatedParent}
    )
    return {
        ...state,
        companies: updatedCompanies
    }
}

export default CompanyReducer