import React from 'react';
import { Link } from 'react-router-dom';

import SpotBanner from './spot_banner';
import ReviewIndexContainer from '../review/review_index_container';

export default class SpotShow extends React.Component {
  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);

    if (this.props.reviews.length === 0) {
      this.props.fetchReviews();
    }
  }

  componentWillReceiveProps(nextProps) {
    let spot = this.props.spot;
    let id = nextProps.match.params.spotId;

    if (!spot || spot && spot.id != id) {
      this.props.fetchSpot(id);
    }
  }

  toggleEdit() {
    let {currentUser, spot} = this.props;

    if (currentUser && currentUser.id == spot.ownerId) {
      return (
        <span>(<Link to={`/spots/${spot.id}/edit`}
            className='edit'>Edit listing</Link>)</span>
      );
    }
  }

  render() {
    let { spot, reviews, currentUser } = this.props;

    if (!spot) {
      return null;
    }

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

            <ReviewIndexContainer spot={spot}
              reviews={reviews} currentUser={currentUser} />
          </div>

          <div className='spot-show-booking'>
            <div className='info'>
              <p><span className='price'>${spot.price}</span> per day</p>
              <p><span className='rating'>⭑⭑⭑⭑⭑</span> <span>123</span></p>
            </div>

            <div>Booking component here</div>

          </div>
        </div>
      </div>
    );
  }
}
