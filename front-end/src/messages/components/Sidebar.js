import React from 'react';
import '../css/sidebar.css';

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }

    render() {
        return (
            <div className="col-sm-4 side">
                <div className="side-one">
                    <div className="row searchBox">
                        <div className="col-sm-12 searchBox-inner">
                            <div className="form-group">
                                <input id="searchText" type="text" className="form-control" name="searchText" placeholder="Search" />
                            </div>
                        </div>
                    </div>

                    <div className="row sideBar">
                        <div className="row sideBar-body">
                            <div className="col-sm-3 col-xs-3 sideBar-avatar">
                                <div className="avatar-icon">
                                    <img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt='' />
                                </div>
                            </div>
                            <div className="col-sm-9 col-xs-9 sideBar-main">
                                <div className="row">
                                    <div className="col-sm-8 col-xs-8 sideBar-name">
                                        <span className="name-meta">John Doe</span>
                                    </div>
                                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span className="time-meta pull-right">18:18</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row sideBar-body">
                            <div className="col-sm-3 col-xs-3 sideBar-avatar">
                                <div className="avatar-icon">
                                    <img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt='' />
                                </div>
                            </div>
                            <div className="col-sm-9 col-xs-9 sideBar-main">
                                <div className="row">
                                    <div className="col-sm-8 col-xs-8 sideBar-name">
                                        <span className="name-meta">John Doe</span>
                                    </div>
                                    <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                                        <span className="time-meta pull-right">18:18</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
