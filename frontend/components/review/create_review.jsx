import React from 'react';
import { withRouter } from 'react-router-dom';
import Rating from 'react-rating';

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.state.spotId = this.props.spot.id;
    this.props.submit(this.state)
      .then(() => this.setState({ rating: null, body: ''}));
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }

    return (
      <div className='create-review-box'>
        <form className='create-review-form'>
          <div className='rating'>
            <p>Rate your experience </p>
            <div>
              <Rating
                onChange={rating => this.state.rating = rating }
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              />
            </div>
          </div>
          <div className='review-body-box'>
            <textarea value={this.state.body} maxLength={500}
              onChange={this.update('body')} 
              placeholder='comments here' />
            <button onClick={this.handleSubmit}>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReview);
