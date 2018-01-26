import React from 'react';
import RegisterForm from '../components/RegisterForm';
import IndexLayout from '../components/IndexLayout';

export default class Register extends React.Component {
  render() {
    return (
        <IndexLayout>
            <RegisterForm />
        </IndexLayout>
    );
  }

}
