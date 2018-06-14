import React from 'react';
import SpotIndexItem from './spot_index_item';

export default class SpotIndex extends React.Component {
  componentDidMount() {
    this.props.fetchSpots().then(() => {
      return this.props.reviews.length === 0 ? this.props.fetchReviews() : null
    });
  }

  render() {
    let { spots, reviews } = this.props;
    spots = spots.map(spot => {

      let review = reviews.filter(el => el.spotId === spot.id);
      let rating = 0;
      review.forEach(el => rating += el.rating);
      rating = rating / review.length || 0;

      return <SpotIndexItem key={spot.id} spot={spot}
                reviewCount={review.length} avgRating={rating} />
    });

    return (
      <div className='spot-index-container'>
        <ul className='spot-index'>{ spots }</ul>
      </div>
    );
  }
}
