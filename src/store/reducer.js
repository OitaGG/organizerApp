// @flow
import {combineReducers, createStore} from "redux";
import {headerReducer} from "./header/reducer";
import {appReducer} from "./app/reducer";

const rootState = combineReducers({
    header: headerReducer,
    app: appReducer
});

export function configureStore() {
    const store = createStore(
        rootState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}