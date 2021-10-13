import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    task: taskReducer
})