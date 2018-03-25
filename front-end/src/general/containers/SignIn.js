import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { NotificationManager } from 'react-notifications';
import SignInForm from '../components/SignInForm';
import IndexLayout from '../components/IndexLayout';
import { redirectToProfile } from '../components/utils.js';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            connected: false
        };
        this.saveState = this.saveState.bind(this);
        this.connectUser = this.connectUser.bind(this);
    }

    connectUser() {
        const user = Object.assign({}, this.state);
        axios.post('/api/users/signin', user).then(({ data }) => {
            const { success, message, userData } = data;
            if (success === true && userData) {
                this.setState({ connected: true });
                const cookies = new Cookies();
                cookies.set('token', userData.token, { path: '/' });
                NotificationManager.success(message, 'Success', 6000);
            }
            else
                NotificationManager.error(message, 'Sorry but...', 6000);
        })
        .catch(err => console.error('Error: ', err));
    }

    saveState(name, value) {
      this.setState({ [name]: value });
    }

    render() {
        switch (this.state.connected) {
            case true:
                return <redirectToProfile username={this.state.username} />;
            default:
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
}
