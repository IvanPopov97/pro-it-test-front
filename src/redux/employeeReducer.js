import {UPDATE_EMPLOYEES} from "./types";

const initialState = {
    employees: []
}

const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_EMPLOYEES:
            return {...state, employees: action.payload.content}
        default: return state
    }
}

export default EmployeeReducer