import React from 'react';
import RegisterForm from '../components/RegisterForm';
import IndexLayout from '../components/IndexLayout';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            birthday: '',
            password: '',
            passwordCfm: '',
            gender: '',
            orientation: '',
            location: ''
        };
        this.saveState = this.saveState.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    createUser() {
        const user = Object.assign({}, this.state);
        axios.post('/api/users', user).then(({ data }) => {
            const { success, message } = data;
            if (success === true)
                NotificationManager.success(message, 'Success !', 6000);
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
                <RegisterForm
                    onSubmit={this.createUser}
                    onChange={this.saveState}
                />
            </IndexLayout>
        );
    }

}
