import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './pages/home/LandingPage';

const Routing = () => {
    return (
      <Router>
        <Switch key="root">
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    );
};

export default Routing;
