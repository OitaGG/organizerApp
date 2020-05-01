import {SET_SINGLE_CASES, SET_WEEK_TEMPLATE, CHANGE_CURRENT_TEMPLATES_LIST, DELETE_SINGLE_CASE, DELETE_WEEK_TEMPLATE} from "./actions";

type initialStateType = {
    singleCases: any,
    weeks: any
}

const initialState = {
    singleCases: [],
    weeks: [],
    currentTemplate: 'days'
};

export const templatesReducer = (
    store: initialStateType = initialState,
    action): initialStateType => {
    switch (action.type) {
        case SET_SINGLE_CASES:
            return {
                ...store,
                singleCases: action.payload
            };
        case SET_WEEK_TEMPLATE:
            return {
                ...store,
                weeks: action.payload
            };
        case CHANGE_CURRENT_TEMPLATES_LIST:
            return {
                ...store,
                currentTemplate: action.payload
            };
        case DELETE_SINGLE_CASE:
            return {
                ...store,
                singleCases: store.singleCases.filter(el => el.id !== action.payload)
            };
        case DELETE_WEEK_TEMPLATE:
            return {
                ...store,
                weeks: store.weeks.filter(el => el.id !== action.payload)
            };
        default:
            return store;
    }
};