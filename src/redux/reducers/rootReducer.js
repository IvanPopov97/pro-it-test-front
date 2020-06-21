import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import listReducer from "./listReducer";
import treeReducer from "./treeReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    pagination: paginationReducer,
    list: listReducer,
    tree: treeReducer
})