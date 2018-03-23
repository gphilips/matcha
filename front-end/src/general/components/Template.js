import React from 'react';
import { NotificationContainer } from 'react-notifications';
import Header from './Header';
import Footer from './Footer';

export default class Template extends React.Component {
    render() {
        return (
          <div className="App">
            <Header />
                {this.props.children}
            <NotificationContainer />
            <Footer />
          </div>
        );
    }
}
