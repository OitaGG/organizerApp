import {TOGGLE_NEW_CARD, REWRITE_CURRENT_CARD, SET_TITLE, SET_DESCRIPTION} from "./actions";

type InitialType = {
    visible: boolean,
    title: string,
    description: string,
    id: string
}
const InitialState = {
    visible: false,
    title: '',
    description: '',
    _id: ''
};

export const newCardReducer = (state:InitialType = InitialState, action) => {
    switch (action.type) {
        case TOGGLE_NEW_CARD:
            return {
                ...state,
                visible: !state.visible
            };
        case REWRITE_CURRENT_CARD:
            return {
                ...state,
                title: action.payload.title,
                description: action.payload.description,
                _id: action.payload.id
            };
        default:
            return state
    }
};