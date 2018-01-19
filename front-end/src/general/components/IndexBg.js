import React from 'react';
import '../css/indexBg.css';

export default class IndexBg extends React.Component {
    render() {
        return (
            <div className="no-scroll">
                <div id="bg-img"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-content text-center">
                                <h1>Be ambitious in <span>love</span>.</h1>

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
