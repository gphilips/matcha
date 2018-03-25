import React from 'react';
import Map from './Map';
import UserCard from '../components/UserCard';
import '../css/members.css';

export default class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div id='listing-members' className='col-md-6 col-sm-12 col-xs-12 pull-left'>
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />
                            <UserCard />

                        </div>

                        <Map />
                    </div>
                </div>
            </div>
        );
    }
}
