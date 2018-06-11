import React from 'react';

import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots();

    if (this.props.reviews.length === 0) {
      this.props.fetchReviews();
    }
  }

  render() {
    let { spots, reviews } = this.props;

    if (!spots) {
      return null;
    }

    spots = spots.map(spot => {
      let spotReviews = reviews.filter(review => review.spotId === spot.id);

      return <SpotIndexItem key={spot.id} spot={spot} reviews={spotReviews} />
    });

    return (
      <div className='spot-index-container'>
        <h2>Explore Middle-earth</h2>
        <ul className='spot-index'>{ spots }</ul>
      </div>
    );
  }
}
