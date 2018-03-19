import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './general/containers/SignIn';
import Register from './general/containers/Register';
import pageNotFound from './general/components/notFound.js';
//import Profile from './profile/containers/Profile.js';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/signin" component={SignIn}/>
            <Route component={pageNotFound} />
        </Switch>
      </Router>
    );
  }
}
