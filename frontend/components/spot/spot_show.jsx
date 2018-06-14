import React from 'react';
import { Link } from 'react-router-dom';

import SpotBanner from './spot_banner';
import ReviewIndexContainer from '../review/review_index_container';
import CreateBookingContainer from '../booking/create_booking_container';
import StarRating from '../star_rating';

export default class SpotShow extends React.Component {
  componentDidMount() {
    let { fetchSpot, fetchReviews, reviews } = this.props;

    fetchSpot(this.props.match.params.spotId);
    if (!reviews.length) {
      fetchReviews();
    }
  }

  componentWillReceiveProps(nextProps) {
    let id = nextProps.match.params.spotId;
    let spot = this.props.spot;

    if (!spot || spot && spot.id != id) {
      this.props.fetchSpot(id);
    }
  }

  toggleEdit() {
    let {currentUser, spot} = this.props;

    if (currentUser && currentUser.id == spot.ownerId) {
      return (
        <span>(<Link to={`/spots/${spot.id}/edit`}
            className='edit'>Edit spot</Link>)</span>
      );
    }
  }

  render() {
    let { spot, reviews, currentUser } = this.props;
    if (!spot) {
      return null;
    }

    let review = reviews.filter(el => el.spotId === spot.id);
    let rating = 0;
    review.forEach(el => rating += el.rating);
    rating = rating / review.length || 0;

    return (
      <div className='spot-show-container'>

        <SpotBanner imageUrl={spot.imageUrl} />

        <div className='spot-show-body'>
          <div className='spot-show-info'>
            <div>
              <p className='landscape'>{spot.landscape.toUpperCase()}</p>
              <h3>{spot.name} {this.toggleEdit()}</h3>
              <p className='location'>{spot.location}</p>
              <p><i className="fas fa-users"></i> {spot.size} guests</p>
              <div className='description'><p>{spot.description}</p></div>
            </div>

            <ReviewIndexContainer spot={spot} reviews={review}
              currentUser={currentUser} rating={rating} />
          </div>

          <div className='spot-show-booking'>
            <div className='info'>
              <p><span className='price'>${spot.price}</span> per day</p>
              <p><StarRating rating={rating} /> { review.length }</p>
            </div>

            <CreateBookingContainer spot={spot} currentUser={currentUser} />
          </div>
        </div>
      </div>
    );
  }
}
