import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './general/containers/Home';
import Register from './general/containers/Register';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/*" component={Home}/>
        </Switch>
      </Router>
    );
  }
}
