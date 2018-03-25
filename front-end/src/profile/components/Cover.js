import React from 'react';
import '../css/cover.css';

export default class Cover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="panel panel-default">
                            <div className="userpic">
                                <img src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt="" id="avatar" />
                            </div>
                            <h3 className="name">Greg Philips</h3>
                            <h5>gphilips</h5>
                            <p>Popularity:<b> 5 points</b></p>
                            <button id='like-btn' className="btn btn-primary text-center">Like <i className="fa fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
