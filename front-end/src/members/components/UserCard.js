import React from 'react';
import '../css/userCard.css'

export default class UserCard extends React.Component {

  render() {
    return (
        <div className="card col-md-6 col-sm-6 col-xs-6">
            <div className="card-body text-center">
                <img className="card-img-top col-md-6 col-sm-6 col-xs-6" src="https://www.bigmouthvoices.com/profile_picture/large/default-profile_picture.jpg" alt='' />
                <h4 className="card-title">username</h4>
                <h5 className="card-text">25 points</h5>
                <button className="like-btn btn btn-primary text-center">Like <i className="fa fa-heart"></i></button>
            </div>
        </div>
    );
  }
}
