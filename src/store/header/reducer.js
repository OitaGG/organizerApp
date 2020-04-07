// @flow
import {HEADER_SETUP, HeaderAction} from "./actions";

const initialState = {
    name: "Unlogin",
};

type initialType = typeof initialState;

export const headerReducer = (store: initialType = initialState, action: HeaderAction): initialType => {
    switch (action.type) {
        case HEADER_SETUP:
            return {
                ...store,
                name: action.name
            };
        default:
            return store;
    }
};