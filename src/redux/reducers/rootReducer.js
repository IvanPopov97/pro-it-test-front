import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import listReducer from "./listReducer";
import treeReducer from "./treeReducer";
import headerReducer from "./headerReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    header: headerReducer,
    pagination: paginationReducer,
    list: listReducer,
    tree: treeReducer
})