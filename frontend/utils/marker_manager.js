export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    spots.forEach(spot => this.createMarkerFromSpot(spot));
  }

  createMarkerFromSpot(spot) {
    let position = new google.maps.LatLng(spot.latitude, spot.longitude);
    let marker = new google.maps.Marker({
      position,
      title: spot.name
    });

    marker.setMap(this.map);
    this.markers[spot.id] = marker;
  }
}
