import React from 'react';
import '../css/cover.css';

export default class Cover extends React.Component {
    render() {
        const { username, firstName, lastName, popularity, avatar } = this.props.profile;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="panel panel-default">
                            <div className="userpic">
                                <img src={avatar} alt="avatar" id="avatar" />
                            </div>
                            <h3 className="name">{firstName} {lastName}</h3>
                            <h5>{username}</h5>
                            <p>Popularity:<b> {popularity} points</b></p>
                            <button id='like-btn' className="btn btn-primary text-center">Like <i className="fa fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
