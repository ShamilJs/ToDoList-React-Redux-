import { combineReducers } from "redux";
import { listItemReducer } from "./listItemReducer";
import { appReduser } from "./appReduser";


export const rootReducer = combineReducers({
    collections: listItemReducer,
    app: appReduser

})