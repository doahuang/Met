import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots().then(() => {
      return this.props.reviews.length === 0 ? this.props.fetchReviews() : null
    });
  }

  render() {
    let spots = this.props.spots;
    
    spots = spots.map(spot => {
      return <SpotIndexItem key={spot.id} spot={spot}
                reviewCount={spot.reviewCount} avgRating={spot.avgRating} />
    });

    return (
      <div className='spot-index-container'>
        <h2>Explore Middle-earth</h2>
        <ul className='spot-index'>{ spots }</ul>
      </div>
    );
  }
}
