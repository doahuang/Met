import React from 'react';

import ReviewIndexItem from './review_index_item';
import CreateReviewContainer from './create_review_container';
import StarRating from '../star_rating';

export default class ReviewIndex extends React.Component {
  render() {
    let { reviews, spot, currentUser, deleteReview } = this.props;

    let reviewNum = reviews.length;
    let reviewSum = reviewNum ? `${reviewNum} Reviews` : 'No Reviews yet';

    let reviewsList = reviews.map((review, i) => {
      return <ReviewIndexItem key={i} review={review} spotId={spot.id}
        currentUser={currentUser} deleteReview={deleteReview} />;
    });

    return (
      <div className='review-container'>
        <div className='review-search-bar'>
          <h4>{ reviewSum } <StarRating reviews={reviews} /></h4>
          <div className='search-bar'>
            <i className="fas fa-search"></i>
            <input placeholder='Search reviews' />
          </div>
        </div>

        <CreateReviewContainer spot={spot} reviewer={currentUser} />

        <div className='review-index-container'>
          <ul className='review-index'>{ reviewsList }</ul>
        </div>
      </div>
    );
  }
}
