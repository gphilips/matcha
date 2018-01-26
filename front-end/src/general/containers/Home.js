import React from 'react';
import SignInForm from '../components/SignInForm';
import IndexLayout from '../components/IndexLayout';

export default class Home extends React.Component {
  render() {
    return (
        <IndexLayout>
            <SignInForm />
        </IndexLayout>
    );
  }

}
