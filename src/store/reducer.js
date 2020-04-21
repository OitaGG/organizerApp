// @flow
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {headerReducer} from "./homeHeader/reducer";
import {timeManagerReducer} from "./timeManagment/reducer";
import {homeSiderReducer} from "./homeSider/reducer";
import {templatesReducer} from "./templates/reducer";

const rootState = combineReducers({
    header: headerReducer,
    timeManager: timeManagerReducer,
    homeSider: homeSiderReducer,
    templates: templatesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
export function configureStore() {
    const store = createStore(
        rootState,
        composeEnhancers(applyMiddleware(...middleware))
    );
    return store;
}