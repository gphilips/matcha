import React from 'react';

export default class UsersLikedBy extends React.Component {
    render() {
        const likedBy = this.props.likedBy;
        if (likedBy) {
            likedBy.map(user => {
                return (
                    <tr>
                        <td><img src={user.avatar} alt="avatar" className="avatar-likedby" /></td>
                        <td><h5>{user.username}</h5></td>
                    </tr>
                );
            })
        }
        return <tr><td>Empty</td></tr>;
    }
}
