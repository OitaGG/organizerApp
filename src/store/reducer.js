// @flow
import {combineReducers, createStore} from "redux";
import {headerReducer} from "./homeHeader/reducer";
import {appReducer} from "./app/reducer";
import {homeSiderReducer} from "./homeSider/reducer";

const rootState = combineReducers({
    header: headerReducer,
    app: appReducer,
    homeSider: homeSiderReducer
});

export function configureStore() {
    const store = createStore(
        rootState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}