import { types } from "../types/types";

export const taskSave = (task) => ({
    type: types.taskSave,
    payload: task
})