import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import 'react-dates/initialize';
// import { DateRangePicker } from 'react-dates';

import Errors from '../shared/errors';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    if (this.props.errors.length) {
      this.props.clear();
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.currentUser) {
      this.state.spotId = this.props.spot.id;
      this.props.submit(this.state).then(() => this.props.history.push('/bookings'));
    } else {
      this.props.history.push('/login');
    };
  }

  render() {
    let dropdown = [];
    for (let i = 0; i < 20; i++) {
      dropdown.push(
        <option key={i} value={i + 1}>{i + 1} guests</option>
      )
    }

    let today = new Date();
    let todayDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000);
    todayDate = todayDate.toJSON().split('T')[0];

    return (
      <div className='booking-form-container'>
        <div className='booking-date-calendar'>
          <label>Start Date</label>
          <input type='date' value={this.state.startDate}
            min={todayDate} onChange={this.update('startDate')} />
          <label>End Date</label>
          <input type='date' value={this.state.endDate}
            min={todayDate} onChange={this.update('endDate')} />
        </div>
        <div className='booking-guests'>
          <label>Guests</label>
          <select onChange={this.update('guests')}>{ dropdown }</select>
        </div>
        <Errors errors={this.props.errors} />
        <div className='button-box'>
          <button onClick={this.handleSubmit}>Request to book</button>
          <p>You won’t be charged yet</p>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);
