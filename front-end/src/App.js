import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from './SecureRoute';
import Template from './general/components/Template';
import SignIn from './general/containers/SignIn';
import Register from './general/containers/Register';
import utils from './general/components/utils';
import Activate from './general/containers/Activate';
import Profile from './profile/containers/Profile';
import Messages from './messages/containers/Messages';
import Members from './members/containers/Members';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Template>
        <Switch>
            <PublicRoute exact path="/" component={SignIn}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/activate" component={Activate}/>
            <PrivateRoute exact path="/profile/:username" component={Profile}/>
            <PrivateRoute exact path="/messages" component={Messages}/>
            <PrivateRoute exact path="/members" component={Members}/>
            <Route component={utils.pageNotFound} />
        </Switch>
        </Template>
      </Router>
    );
  }
}
