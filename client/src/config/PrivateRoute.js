import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthService } from '../service/AuthService';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const loggedIn = AuthService.currentUserValue;
        if(!loggedIn) {
            return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        }
        return <Component {...props} />
    }} />
)
