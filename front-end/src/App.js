import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './general/containers/SignIn';
import Register from './general/containers/Register';
import pageNotFound from './general/components/notFound';
import Profile from './profile/containers/Profile';


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/" component={SignIn}/>
            <Route exact path="/profile" component={Profile}/>
            <Route component={pageNotFound} />
        </Switch>
      </Router>
    );
  }
}
