import React from 'react';
import '../css/indexLayout.css';

export default class IndexLayout extends React.Component {
    render() {
        return (
            <div className="App">
                <div id="bg-img"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-content text-center">
                                <h1>Because it just <span>matcha</span> your need.</h1>

                                <div className="card">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
