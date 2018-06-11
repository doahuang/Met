import React from 'react';
import { withRouter } from 'react-router-dom';

import RenderErrors from '../errors';
import { clear } from '../../actions/session';

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    clear();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.state.spotId = this.props.spot.id;
    this.props.submit(this.state)
      .then(() => this.props.history.push(`/spots/${this.state.spotId}`));
  }

  render() {
    return (
      <div className='create-review-box'>
        <form className='create-review-form'>
          <div className='rating'>
            <span>Rating</span>
            <span>
              <input onChange={this.update('rating')}
                id='star-1' type='radio' name='rating' value='1' />
              <label htmlFor='star-1'> ⭑</label>
            </span>
            <span>
              <input onChange={this.update('rating')}
                id='star-2' type='radio' name='rating' value='2' />
              <label htmlFor='star-2'> ⭑⭑</label>
            </span>
            <span>
              <input onChange={this.update('rating')}
                id='star-3' type='radio' name='rating' value='3' />
              <label htmlFor='star-3'> ⭑⭑⭑</label>
            </span>
            <span>
              <input onChange={this.update('rating')}
                id='star-4' type='radio' name='rating' value='4' />
              <label htmlFor='star-4'> ⭑⭑⭑⭑</label>
            </span>
            <span>
              <input onChange={this.update('rating')}
                id='star-5' type='radio' name='rating' value='5' />
              <label htmlFor='star-5'> ⭑⭑⭑⭑⭑</label>
            </span>
          </div>

          <RenderErrors errors={this.props.errors} />

          <div className='review-body-box'>
            <textarea onChange={this.update('body')} placeholder='comments here' />
            <button onClick={this.handleSubmit}>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReview);
