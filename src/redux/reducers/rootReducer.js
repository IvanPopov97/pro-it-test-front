import {combineReducers} from "redux";
import appReducer from "./appReducer";
import paginationReducer from "./paginationReducer";
import listReducer from "./listReducer";
import treeReducer from "./treeReducer";
import {reducer as formReducer} from "redux-form";
import selectControlReducer from "./selectControlReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    selectControl: selectControlReducer,
    form: formReducer,
    pagination: paginationReducer,
    list: listReducer,
    tree: treeReducer
})