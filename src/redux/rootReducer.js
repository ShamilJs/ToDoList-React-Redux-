import { combineReducers } from "redux";
import { listItemReducer } from "./listItemReducer";
import { appReduser } from "./appReduser";
import { modalRemoveReduser } from "./modalRemoveReduser";
import { fireBaseReducer } from "./fireBaseReducer";

export const rootReducer = combineReducers({
    collections: listItemReducer,
    app: appReduser,
    modalRemoveReduser: modalRemoveReduser,
    fireBase: fireBaseReducer
})