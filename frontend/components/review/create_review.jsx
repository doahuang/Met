import React from 'react';
import { withRouter } from 'react-router-dom';

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

  drawRadioButton(id, value) {
    return (
      <span>
        <input id={id} type='radio' value={value}
          onChange={this.update('rating')}
          checked={this.state.rating === value} />
        <label htmlFor={id}> {value}⭑</label>
      </span>
    );
  }

  render() {
    if (!this.props.currentUser) {
      return null;
    }

    return (
      <div className='create-review-box'>
        <form className='create-review-form'>
          <div className='rating'>
            <span>Rating</span>
            { this.drawRadioButton('1', '1') }
            { this.drawRadioButton('2', '2') }
            { this.drawRadioButton('3', '3') }
            { this.drawRadioButton('4', '4') }
            { this.drawRadioButton('5', '5') }
          </div>
          <div className='review-body-box'>
            <textarea value={this.state.body}
              onChange={this.update('body')} placeholder='comments here' />
            <button onClick={this.handleSubmit}>submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateReview);
