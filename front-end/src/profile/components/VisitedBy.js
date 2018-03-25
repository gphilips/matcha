import React from 'react';
import '../css/visitedBy.css';

export default class VisitedBy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 col-xs-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Visited by</h4>
                    </div>
                    <div className="panel-body scoll">
                        <div className="col-md-12">
                            <table id='visited-by'>
                                <tbody>
                                    <tr>
                                        <td><img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" className="avatar-likedby" /></td>
                                        <td><h5>login</h5></td>
                                        <td><p>23/03/2018 20h50</p></td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" className="avatar-likedby" /></td>
                                        <td><h5>login</h5></td>
                                        <td><p>23/03/2018 20h50</p></td>

                                    </tr>
                                    <tr>
                                        <td><img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" className="avatar-likedby" /></td>
                                        <td><h5>login</h5></td>
                                        <td><p>23/03/2018 20h50</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
