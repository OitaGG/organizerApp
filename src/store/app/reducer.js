// @flow
import {SHOW_LOADER, HIDE_LOADER, LoaderAction, LOG_IN} from "./actions";

const initialState = {
    loading: true,
    logged: true
};

type initialType = typeof initialState;

export const appReducer = (store: initialType = initialState, action: LoaderAction): initialType => {
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
        default:
            return store;
    }
};