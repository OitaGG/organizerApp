/* @flow */
import React from 'react';
import {Provider} from 'react-redux'
import {configureStore} from "./store/reducer";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/index.less'
import {Auth, Home, Start} from "./pages";

const store = configureStore();
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path={["/login", "/registration"]} component={Auth}/>
                    <Route exact path="/" component={Start}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default App;