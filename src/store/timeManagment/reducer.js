// @flow
import {CHANGE_CURRENT_WEEK, ChangeCurrentWeekActionType} from "./actions";

const initialState = {
    week: null
};

type initialType = typeof initialState;

export const timeManagerReducer = (store: initialType = initialState, action: ChangeCurrentWeekActionType): initialType => {
    switch (action.type) {
        case CHANGE_CURRENT_WEEK:
            return {
                ...store,
                week: action.payload
            };
        default:
            return store;
    }
};