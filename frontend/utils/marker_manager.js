export default class MarkerManager {
  constructor(props) {
    this.map = props.map;
    this.markers = {};
    this.draggable = props.draggable;
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot.id] = spot);

    spots
      .filter(spot => !this.markers[spot.id])
      .forEach(spot => this.createMarkerFromSpot(spot));

    Object.keys(this.markers)
      .filter(spotId => !spotsObj[spotId])
      .forEach((spotId) => this.removeMarker(this.markers[spotId]));
  }

  removeMarker(marker) {
    marker.setMap(null);
    delete this.markers[marker.spotId];
  }

  createMarkerFromSpot(spot) {
    let position = new google.maps.LatLng(spot.latitude, spot.longitude);
    let marker = new google.maps.Marker({
      position,
      title: spot.name,
      spotId: spot.id,
      draggable: this.draggable
    });

    marker.setMap(this.map);
    this.markers[marker.spotId] = marker;

    google.maps.event.addListener(marker, 'dragend', () => {
      let pos = marker.getPosition();
      this.map.panTo(pos);
    });
  }
}
