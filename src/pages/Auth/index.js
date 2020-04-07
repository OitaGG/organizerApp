import React from 'react';
import './Auth.less'
import {LoginForm, RegistrationForm} from "../../modules";
import {Route, Switch} from "react-router";
const Auth = () => {
    return (
        <section className="auth">
            <Switch>
                <Route path="/registration" component={RegistrationForm}/>
                <Route path="/login" component={LoginForm}/>
            </Switch>
            <div className="auth-bg-svg">
                <img className="left" src="../../../public/img/left-auth.svg"/>
                <img className="right" src="../../../public/img/right-auth.svg"/>
            </div>
        </section>
    );
};

export default Auth;