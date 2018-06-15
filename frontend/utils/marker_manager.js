export default class MarkerManager {
  constructor(props) {
    this.map = props.map;
    this.draggable = props.draggable;
    this.markers = {};

    this.handleClick = props.handleClick;
    this.handleDrag = props.handleDrag;
  }

  updateMarkers(spots) {
    const pojoSpots = {};
    spots.forEach(spot => pojoSpots[spot.id] = spot);

    spots.filter(spot => !this.markers[spot.id])
      .forEach(spot => this.createMarkerFromSpot(spot));

    Object.values(this.markers)
      .filter(marker => !pojoSpots[marker.spotId])
      .forEach(marker => this.removeMarker(marker));
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.spotId];
  }

  createMarkerFromSpot(spot) {
    let position = new google.maps.LatLng(spot.latitude, spot.longitude);

    const markerOptions = {
      position,
      title: spot.name,
      spotId: spot.id,
      draggable: this.draggable
    }

    let marker = new google.maps.Marker(markerOptions);

    marker.setMap(this.map);
    this.markers[marker.spotId] = marker;

    // marker.addListener('click', () => this.handleClick(spot));
    // marker.addListener('dragend', () => this.handleDrag(spot));

    google.maps.event.addListener(marker, 'dragend', () => {
      let pos = marker.getPosition();
      this.map.panTo(pos);
    });
  }
}
