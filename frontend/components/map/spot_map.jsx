import React from 'react';
import MarkerManager from '../../utils/marker_manager';

export default class SpotMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentWillReceiveProps(nextProps) {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  render() {
    return (
      <div className='spot-map-container'>
        <div id='map-container' ref={ map => this.mapNode = map }>
          Spot Map here
        </div>
      </div>
    );
  }
}
