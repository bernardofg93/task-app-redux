import { types } from "../types/types";

const initialState = {
    tasks: []
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.taskSave:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }

        default:
            return state;
    }
}