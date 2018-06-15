import React from 'react';
import MarkerManager from '../../utils/marker_manager';

export default class SpotMap extends React.Component {
  componentDidMount() {
    let { center, zoom, gestureHandling, draggable } = this.props;

    const mapOptions = {
      center,
      zoom,
      gestureHandling,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.refs.map, mapOptions);
    this.MarkerManager = new MarkerManager({
      map: this.map,
      draggable
    });

    this.registerListeners();

    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  registerListeners() {
    this.map.addListener('dragend', () => this.updateBounds());
  }

  updateBounds() {
    let { east, north, south, west } = this.map.getBounds().toJSON();

    let bounds = {
      northEast: { lat: north, lng: east },
      southWest: { lat: south, lng: west }
    };

    this.props.updateBounds(bounds);
  }

  render() {
    return (
      <div className='map-container'>
        <div id='map' ref='map'>
          Loading map
        </div>
      </div>
    );
  }
}
