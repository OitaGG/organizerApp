// @flow
import {CHANGE_INPUT} from "./actions";

type InitialStateType = {
    input: string,
}

const initialState: InitialStateType = {
    input: '',
};

export const homeSiderReducer = (store: InitialStateType = initialState, action): InitialStateType => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...store,
                input: action.payload
            };
        default:
            return store
    }
};