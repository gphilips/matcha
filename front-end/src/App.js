import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './SecureRoute';
import Template from './general/components/Template';
import SignIn from './general/containers/SignIn';
import Register from './general/containers/Register';
import utils from './general/components/utils';
import Activate from './general/containers/Activate';
import Profile from './profile/containers/Profile';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Template>
        <Switch>
            <Route exact path="/register" component={Register}/>
            <PublicRoute exact path="/" component={SignIn}/>
            <PrivateRoute exact path="/profile/:username" component={Profile}/>
            <Route exact path="/activate" component={Activate}/>
            <Route component={utils.pageNotFound} />
        </Switch>
        </Template>
      </Router>
    );
  }
}
