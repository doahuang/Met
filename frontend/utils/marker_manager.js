export default class MarkerManager {
  constructor(props) {
    this.map = props.map;
    this.draggable = props.draggable;
    this.markers = {};

    this.handleMarkerDrag = props.handleMarkerDrag;
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

    marker.addListener('dragend', () => {
      let pos = marker.getPosition();
      this.map.panTo(pos);
      return this.handleMarkerDrag(spot, pos);
    });
  }
}
