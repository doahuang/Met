import React from 'react';

export default class SpotMap extends React.Component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
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
