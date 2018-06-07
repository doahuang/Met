import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();
  }

  render() {
    let spots = this.props.spots.map(spot => (
      <SpotIndexItem key={spot.id} spot={spot} />
    ));
    return (
      <div>
        <ul className='spot-index'>{spots}</ul>
      </div>
    );
  }
}
