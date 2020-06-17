import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import companyReducer from "./companyReducer";
import employeeReducer from "./employeeReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    pagination: paginationReducer,
    company: companyReducer,
    employee: employeeReducer
})