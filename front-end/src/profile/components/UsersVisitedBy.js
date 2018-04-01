import React from 'react';

export default class UsersVisitedBy extends React.Component {
    render() {
        const visitedBy = this.props.visitedBy;
        if (visitedBy) {
            visitedBy.map(user => {
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
