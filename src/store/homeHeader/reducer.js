// @flow
import {SHOW_SIDER, siderAction} from "./actions";

const initialState = {
    showSider: true,
};

type initialType = typeof initialState;

export const headerReducer = (store: initialType = initialState, action: siderAction): initialType => {
    switch (action.type) {
        case SHOW_SIDER:
            return {
                ...store,
                showSider: !store.showSider
            };
        default:
            return store;
    }
};