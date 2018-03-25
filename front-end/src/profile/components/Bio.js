import React from 'react';

export default class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" href="#bio">Biography</a>
                        </h4>
                    </div>
                    <div id="bio" className="panel-collapse collapse in">
                        <div className="panel-body text-center">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
