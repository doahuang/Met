export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(spots) {
    const spotsObj = {};
    spots.forEach(spot => spotsObj[spot.id] = spot);

    spots
      .filter(spot => !this.markers[spot.ib])
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
      spodId: spot.id
    });

    marker.setMap(this.map);
    this.markers[marker.spotId] = marker;
  }
}
