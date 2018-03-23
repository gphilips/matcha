import React from 'react';
import Template from '../components/Template';
import axios from 'axios';

export default class Activate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            token: ''
        };

        this.parseQuery = this.parseQuery.bind(this);
        this.sendState = this.sendState.bind(this);
    }

    componentWillMount() {
        const { value } = this.parseQuery();
        const email = value[0];
        const token = value[1];
        this.setState({ email, token });
    }

    componentDidMount() {
        this.sendState();
    }

    parseQuery() {
        const queries = this.props.location.search.split('&');
        const fields = queries.map(query => {
            const querySplited = Array.from(query);
            if (querySplited[0] === '?')
                querySplited.splice(0, 1);
            return query = querySplited.join('').split('=')[0];
        });
        const value = queries.map(query => query.split('=')[1]);
        return {fields, value};
    }

    sendState() {
        const emailToken = Object.assign({}, this.state);
        axios.post('/api/users/activate', emailToken).then(({ data }) => {
            const { success, message } = data;
            if (success === true) {
                NotificationManager.success(message, 'Success !', 6000);
            }
            else {
                NotificationManager.error(message, 'Sorry but...', 6000);
            }
        })
        .catch(err => console.error('Error: ', err));
    }

    render() {
        return (<Template/>);
    }
}
