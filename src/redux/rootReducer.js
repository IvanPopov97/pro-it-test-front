import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import companyReducer from "./companyReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    pagination: paginationReducer,
    company: companyReducer
})