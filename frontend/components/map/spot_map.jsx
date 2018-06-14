import React from 'react';
import MarkerManager from '../../utils/marker_manager';

const sf = { lat: 37.7758, lng: -122.435 };

export default class SpotMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: this.props.center || sf,
      zoom: 12,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
      },
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);

    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  updateBounds() {
    let { east, north, south, west } = this.map.getBounds().toJSON();
    let bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west }
    };
    this.props.updateBounds(bounds);
  }

  registerListeners() {
    this.map.addListener('dragend', () => this.updateBounds());
  }

  render() {
    return (
      <div className='map-container'>
        <div id='map-container' ref={ map => this.mapNode = map }>
          Spot Map here
        </div>
      </div>
    );
  }
}
