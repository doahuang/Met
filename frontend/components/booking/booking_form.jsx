import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import RenderErrors from '../errors';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clear();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.state.spotId = this.props.spot.id;
    this.props.submit(this.state).then(() => this.props.history.push('/bookings'));
  }

  render() {
    let dropdown = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    dropdown = dropdown.map((op, i) => (
      <option key={i} value={i}>{i + 1} guests</option>
    ));

    return (
      <div className='booking-form-container'>
        <div className='booking-date-calendar'>
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          />
        </div>
        <div className='booking-guests'>
          <select>{ dropdown }</select>
        </div>
        <div className='button-box'>
          <button onClick={this.handleSubmit}>Request to book</button>
          <p>You won’t be charged yet</p>
        </div>
        <RenderErrors errors={this.props.errors} />
      </div>
    );
  }
}

export default withRouter(BookingForm);
