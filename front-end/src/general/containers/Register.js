import React from 'react';
import RegisterForm from '../components/RegisterForm';
import IndexLayout from '../components/IndexLayout';
import Template from '../components/Template';
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
        };
        this.saveState = this.saveState.bind(this);
        this.createUser = this.createUser.bind(this);
    }

//     componentWillMount() {
//         let option = {
//             enableHighAccuracy: true,
//             timeout: 20000,
//             maximumAge: 10000
//         };
//
//         navigator.geolocation.getCurrentPosition((pos) => {
//             this.setState({
//                 location: [pos.coords.latitude, pos.coords.longitude]
//             });
//            this.getLocation();
//         }, (error) => alert(error.message), option);
//     }

    // getLocation() {
    //     const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyBhsxTkddjmFdZsCPq82usy-ASv1ATzpV0`;
    //     axios.get(url).then((data) => {
    //         return this.setState({address: data.data.results[0].formatted_address});
    //     }).catch(err => console.error('Error: ', err));
    // }

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
            <Template>
                <IndexLayout>
                    <RegisterForm
                        onSubmit={this.createUser}
                        onChange={this.saveState}
                    />
                </IndexLayout>
            </Template>
        );
    }

}
