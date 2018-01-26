import React from 'react';
import InputForm from './InputForm';
import SubmitForm from './SubmitForm';

export default class RegisterForm extends React.Component {
    render() {
        return (
          <form className="form-register" onSubmit={this.handleSubmit}>
              <InputForm type="text" name="username" placeholder="Username" className="form-group inputForm" />
              <InputForm type="text" name="age" placeholder="Age" className="form-group inputForm" />
              <InputForm type="text" name="adress" placeholder="Adress" className="form-group inputForm" />
              <InputForm type="password" name="password" placeholder="Password" className="form-group inputForm" />
              <InputForm type="password" name="password-cfm" placeholder="Confirm your password" className="form-group inputForm" />
              <SubmitForm value="Register" className="inputForm" />
          </form>
        );
    }
}
