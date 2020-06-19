import {UPDATE_COMPANIES} from "./types";

const initialState = {
    companies: [],
    // headCompaniesId: [],
}

const CompanyReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMPANIES:
            return {...state, companies: action.payload.content}
        default: return state
    }
}

export default CompanyReducer