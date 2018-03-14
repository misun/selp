import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './auth/login_form_container';
import SignupFormContainer from './auth/signup_form_container';
import BusinessIndexContainer from './businesses/business_index_container';
import BusinessItemDetailContainer from './businesses/business_item_detail_container.js';
import Home from './layouts/home';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute
          exact
          path='/login'
          component={ LoginFormContainer } />

        <AuthRoute
          exact
          path='/signup'
          component={ SignupFormContainer } />

        <AuthRoute
          exact
          path='/business/:businessId'
          component={BusinessItemDetailContainer} />

        <AuthRoute
          exact
          path='/business'
          component={BusinessIndexContainer} />
        <Route
          exact
          path='/'
          component={ Home} />
      </Switch>

      <footer className="footer">
        <small className="footer-copy">
          &copy; 2018 Gandalp. All rights reserved.
        </small>

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </footer>

    </div>
  );
};

export default App;
