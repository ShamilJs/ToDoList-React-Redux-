import { combineReducers } from "redux";
import { listItemReducer } from "./listItemReducer";

export const rootReducer = combineReducers({
    collections: listItemReducer

})