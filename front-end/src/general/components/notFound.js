import React from 'react';
import IndexLayout from '../components/IndexLayout';

export default class PageNotFound extends React.Component {
    render() {
        return (
            <IndexLayout>
                <div className="close-container">{"Sorry but this page doesn't exist."}</div>
            </IndexLayout>
        );
    }
}
