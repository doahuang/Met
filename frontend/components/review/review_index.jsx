import React from 'react';
import ReviewIndexItem from './review_index_item';

const drawStar = rating => '⭑⭑⭑⭑⭑'.slice(0, rating);

export default class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(); //to change
  }

  render() {
    let reviews = this.props.reviews.filter(
      review => review.spotId === this.props.spot.id);

    let avgRating = 0;

    if (!reviews) {
      return null;
    }

    let reviewNum = reviews.length;
    let reviewSum = reviewNum ? `${reviewNum} Reviews` : 'No Reviews yet';

    reviews = reviews.map((review, i) => {
      avgRating += parseInt(review.rating);

      return <ReviewIndexItem key={i}
        currentUser={this.props.currentUser}
        spotId={this.props.spot.id} review={review}
        deleteReview={this.props.deleteReview} />;
    });

    avgRating = Math.ceil(avgRating/reviewNum);

    return (
      <div className='review-container'>
        <div className='review-search-bar'>
          <h4>{ reviewSum }
            <span className='star'>
              <span> {drawStar(avgRating)}</span><span className='lightgrey'>{drawStar(5 - avgRating)}</span>
            </span>
          </h4>
          <div className='search-bar'>
            <i className="fas fa-search"></i><input placeholder='Search reviews' />
          </div>
        </div>
        <div className='review-index-container'>
          <ul className='review-index'>{ reviews }</ul>
        </div>
      </div>
    );
  }
}
