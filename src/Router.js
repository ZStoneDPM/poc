import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';

const Router = () => {
    return (
        <Switch key='root'>
            <Route exact path='/' component={LandingPage}/>
        </Switch>
    );
};

export default Router;
