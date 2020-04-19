// @flow
import {CHANGE_TEMPLATES_LIST} from './actions';
import {CHANGE_INPUT} from "./actions";

type InitialStateType = {
    list: string,
    input: string
}

const initialState: InitialStateType = {
    list: 'days',
    input: ''
};

export const homeSiderReducer = (store: InitialStateType = initialState, action): InitialStateType => {
    switch (action.type) {
        case CHANGE_TEMPLATES_LIST:
            return {
                ...store,
                list: action.payload
            };
        case CHANGE_INPUT:
            return {
                ...store,
                input: action.payload
            };
        default:
            return store
    }
};