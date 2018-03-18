import React from 'react';
import RegisterForm from '../components/RegisterForm';
import IndexLayout from '../components/IndexLayout';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            birthday: '',
            address: '',
            password: '',
            passwordCfm: '',
            gender: '',
            orientation: '',
            location: ''
        };
        this.saveState = this.saveState.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    saveState(name, value) {
      this.setState({ [name]: value });
    }

    createUser() {
      const user = Object.assign({}, this.state);
      console.log(JSON.stringify(user));
      axios.post('/api/users', user).then(({ data }) => {
        const { success, message } = data;
        if (success === true) {
          NotificationManager.success(message, 'Success!', 6000);
        } else {
          NotificationManager.error(message, 'Sorry but...', 6000);
        }
      })
      .catch(err => console.error('Error: ', err));
    }

  render() {
    //  console.log(JSON.stringify(this.state))
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
