import React from 'react';
import Header from './general/components/Header';
import Footer from './general/components/Footer';
import SignInForm from './general/components/SignInForm';
import IndexBg from './general/components/IndexBg';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <IndexBg>
            <SignInForm />
        </IndexBg>
        
        <Footer />
      </div>
    );
  }
}
