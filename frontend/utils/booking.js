export const fetchBookings = () => $.ajax({
  method: 'GET', url: 'api/bookings'
});

export const createBooking = booking => $.ajax({
  method: 'POST', url: 'api/bookings',
  data: { booking: payload(booking) }
});

export const deleteBooking = booking => $.ajax({
  method: 'DELETE', url: `api/bookings/${booking.id}`
});

const payload = booking => ({
  begin_date: booking.beginDate,
  end_date: booking.endDate,
  guests: booking.guests,
  booker_id: booking.bookerId,
  spot_id: booking.spotId
});
