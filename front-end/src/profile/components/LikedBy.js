import React from 'react';
import '../css/likedBy.css';

export default class LikedBy extends React.Component {
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
                        <h4 className="panel-title">Liked by</h4>
                    </div>
                    <div className="panel-body scroll">
                        <div className="col-md-12">
                            <table id='liked-by'>
                                <tbody>
                                    <tr>
                                        <td><img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" className="avatar-likedby" /></td>
                                        <td><h5>login</h5></td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" className="avatar-likedby" /></td>
                                        <td><h5>login</h5></td>
                                    </tr>
                                    <tr>
                                        <td><img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" className="avatar-likedby" /></td>
                                        <td><h5>login</h5></td>
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
