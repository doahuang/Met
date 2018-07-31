import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../utils/marker_manager';

class SpotMap extends React.Component {
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
      draggable,
      handleMarkerDrag: this.handleMarkerDrag.bind(this),
      handleMarkerClick: this.handleMarkerClick.bind(this)
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

  handleMarkerDrag(spot, position) {
    spot.latitude = position.lat();
    spot.longitude = position.lng();
  }

  handleMarkerClick(spotId) {
    if (!this.MarkerManager.draggable) {
      this.props.history.push(`/spots/${spotId}`);
    }
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

export default withRouter(SpotMap);
