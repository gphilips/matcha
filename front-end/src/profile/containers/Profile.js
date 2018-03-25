import React from 'react';
import Cover from '../components/Cover';
import Bio from '../components/Bio';
import Slider from '../components/Slider';
import Info from '../components/Info';
import LikedBy from '../components/LikedBy';
import VisitedBy from '../components/VisitedBy';
import '../css/profile.css';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }



    render() {
        return (
            <div>
                <Cover />
                <Bio />
                <div className="container">
                    <div className="row">
                        <Slider />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <LikedBy />
                            <VisitedBy />
                            <Info />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
