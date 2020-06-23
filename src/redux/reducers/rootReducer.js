import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import listReducer from "./listReducer";
import treeReducer from "./treeReducer";
import headerReducer from "./headerReducer";
import addFormReducer from "./addFormReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    addForm: addFormReducer,
    header: headerReducer,
    pagination: paginationReducer,
    list: listReducer,
    tree: treeReducer
})