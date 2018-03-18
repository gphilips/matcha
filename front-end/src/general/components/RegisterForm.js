import React from 'react';
import axios from 'axios';
import InputForm from './InputForm';
import RadioForm from './RadioForm';
import SubmitForm from './SubmitForm';

export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: '',
            longitude: '',
            address: ''
        };

        this.getLocation = this.getLocation.bind(this);
    }

    componentDidMount() {
        let option = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 10000
        };

        navigator.geolocation.getCurrentPosition((pos) => {
            this.setState({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            });
            this.getLocation();
            this.props.onChange('location', [this.state.latitude, this.state.longitude]);
        }, (error) => alert(error.message), option);
    }

    getLocation() {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyBhsxTkddjmFdZsCPq82usy-ASv1ATzpV0`;
        axios.get(url).then((data) => {
            return this.setState({address: data.data.results[0].formatted_address});
        }).catch(err => console.error('Error: ', err));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit();
    }

    handleInputChange = (name, value) => {
      this.props.onChange(name, value);
    }

    handleRadioChange = (name, value) => {
      this.props.onChange(name, value);
    }

    render() {
        return (
            <form className="form-register" onSubmit={this.handleSubmit}>
                <div className="form-inline">
                    <RadioForm
                      label="male"
                      name="gender"
                      text="Male"
                      onChange={this.handleInputChange}
                    />
                    <RadioForm
                      label="female"
                      name="gender"
                      text="Female"
                      onChange={this.handleInputChange}
                    />
                    <RadioForm
                      label="both"
                      name="gender"
                      text="Both"
                      onChange={this.handleInputChange}
                    />
                </div>

                <InputForm
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <InputForm type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <InputForm type="email"
                    name="email"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <InputForm type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <InputForm type="password"
                    name="passwordCfm"
                    placeholder="Confirm your password"
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <InputForm type="date"
                    name="birthday"
                    placeholder="Birth Date"
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <InputForm type="text"
                    value={this.state.address}
                    name="address"
                    placeholder='Address'
                    onChange={this.handleInputChange}
                    className="form-group inputForm"
                />

                <div className="form-inline">
                    <RadioForm
                        label="straight"
                        name="orientation"
                        text="Straight"
                        onChange={this.handleRadioChange}
                    />
                    <RadioForm
                        label="gay"
                        name="orientation"
                        text="Gay"
                        onChange={this.handleRadioChange}
                    />
                    <RadioForm
                        label="bisexual"
                        name="orientation"
                        text="Bisexual"
                        onChange={this.handleRadioChange}
                    />
                </div>

                <SubmitForm value="Register"
                    className="inputForm"
                />
            </form>
        );
    }
}
