import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component {
  static defaultProps = {
    center: {lat: 48.8911, lng: 2.3411},
    zoom: 11
  };

  render() {
    return (
        <div id='google-map' className='col-md-6 col-sm-12 col-xs-12 pull-right position-static'>
            <div style={{width: '100%', height: '90vh'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAGLOv-ItslEDZHiXtPTzipD9eclN42LZM' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={48.8911}
                    lng={48.8911}
                    text={'You'}
                />
                </GoogleMapReact>
            </div>
        </div>
    );
  }
}
