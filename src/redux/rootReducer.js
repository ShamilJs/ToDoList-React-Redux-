import { combineReducers } from "redux";
import { listItemReducer } from "./listItemReducer";
import { appReduser } from "./appReduser";
import { modalRemoveReduser } from "./modalRemoveReduser";

export const rootReducer = combineReducers({
    collections: listItemReducer,
    app: appReduser,
    modalRemoveReduser: modalRemoveReduser
})