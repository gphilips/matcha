import React from 'react';
import '../css/info.css';

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
//        this.saveState = this.saveState.bind(this);
    }



    render() {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">Informations</h4>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-12">
                            <table id='infos'>
                                <tbody>
                                    <tr>
                                        <td><b>Age</b></td>
                                        <td>25</td>
                                    </tr>
                                    <tr>
                                        <td><b>Gender</b></td>
                                        <td>Male</td>
                                    </tr>
                                    <tr>
                                        <td><b>Orientation</b></td>
                                        <td>Straight</td>
                                    </tr>
                                    <tr>
                                        <td><b>Address</b></td>
                                        <td>Rue des jeux</td>
                                    </tr>
                                    <tr>
                                        <td><b>Last connection</b></td>
                                        <td>24/03/2018 23h42</td>
                                    </tr>
                                    <tr>
                                        <td><b>Tags</b></td>
                                        <td>
                                            <div className='tags'>#tag</div>
                                            <div className='tags'>#tag</div>
                                            <div className='tags'>#tag</div>
                                            <div className='tags'>#tag</div>
                                            <div className='tags'>#tag</div>
                                        </td>
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
