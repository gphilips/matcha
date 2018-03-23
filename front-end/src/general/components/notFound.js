import React from 'react';
import IndexLayout from '../components/IndexLayout';
import Template from '../components/Template';

export default class PageNotFound extends React.Component {
    render() {
        return (
            <Template>
                <IndexLayout>
                    <div className="close-container">{"Sorry but this page doesn't exist."}</div>
                </IndexLayout>
            </Template>
        );
    }
}
