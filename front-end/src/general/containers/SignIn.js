import React from 'react';
import SignInForm from '../components/SignInForm';
import IndexLayout from '../components/IndexLayout';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.saveState = this.saveState.bind(this);
        this.connectUser = this.connectUser.bind(this);
    }

    connectUser() {
        const user = Object.assign({}, this.state);
        axios.post('/api/users/signin', user).then(({ data }) => {
            const { success, message } = data;
            if (success === true)
                NotificationManager.success(message, 'Success', 6000);
            else
                NotificationManager.error(message, 'Sorry but...', 6000);
        })
        .catch(err => console.error('Error: ', err));
    }

    saveState(name, value) {
      this.setState({ [name]: value });
    }

    render() {
        return (
            <IndexLayout>
                <SignInForm
                    onSubmit={this.connectUser}
                    onChange={this.saveState}
                />
            </IndexLayout>
        );
    }

}
