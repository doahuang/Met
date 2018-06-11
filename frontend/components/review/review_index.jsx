import React from 'react';
import ReviewIndexItem from './review_index_item';

const drawStar = rating => '⭑⭑⭑⭑⭑'.slice(0, rating);

export default class ReviewIndex extends React.Component {
  render() {
    let { reviews, spot, currentUser, deleteReview } = this.props;
    reviews = reviews.filter(review => review.spotId === spot.id);
    let avgRating = 0;
    let reviewNum = reviews.length;
    let reviewSum = reviewNum ? `${reviewNum} Reviews` : 'No Reviews yet';

    reviews = reviews.map((review, i) => {
      avgRating += parseInt(review.rating);

      return <ReviewIndexItem key={i} review={review} spotId={spot.id}
        currentUser={currentUser} deleteReview={deleteReview} />;
    });

    avgRating = Math.ceil(avgRating / reviewNum);

    return (
      <div className='review-container'>
        <div className='review-search-bar'>
          <h4>{ reviewSum }
            <span className='star'>
              <span> {drawStar(avgRating)}</span>
              <span className='lightgrey'>{drawStar(5 - avgRating)}</span>
            </span>
          </h4>
          <div className='search-bar'>
            <i className="fas fa-search"></i>
            <input placeholder='Search reviews' />
          </div>
        </div>
        <div className='review-index-container'>
          <ul className='review-index'>{ reviews }</ul>
        </div>
      </div>
    );
  }
}
