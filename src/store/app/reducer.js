// @flow
import {SHOW_LOADER, HIDE_LOADER, LoaderAction, LOG_IN, CHANGE_CURRENT_WEEK} from "./actions";

const initialState = {
    loading: true,
    logged: true,
    week: null
};

type initialType = typeof initialState;

export const appReducer = (store: initialType = initialState, action): initialType => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...store,
                loading: true
            };
        case HIDE_LOADER:
            return {
                ...store,
                loading: false
            };
        case LOG_IN:
            return {
                ...store,
                logged: true
            };
        case CHANGE_CURRENT_WEEK:
            return {
                ...store,
                week: action.payload
            };
        default:
            return store;
    }
};