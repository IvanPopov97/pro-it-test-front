import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import listReducer from "./listReducer";
import treeReducer from "./treeReducer";
import addFormReducer from "./addFormReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    addForm: addFormReducer,
    pagination: paginationReducer,
    list: listReducer,
    tree: treeReducer
})