import React from 'react';
import InputForm from './InputForm';
import SubmitForm from './SubmitForm';

export default class SignInForm extends React.Component {
    render() {
        return (
            <form className="form-signin" onSubmit={this.handleSubmit}>
                <InputForm type="text" name="username" placeholder="Username" className="form-group inputForm" />
                <InputForm type="password" name="password" placeholder="Password" className="form-group inputForm" />
                <SubmitForm value="Log in" className="inputForm" />
            </form>
        );
    }
}
