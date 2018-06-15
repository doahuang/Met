export const fetchBookings = () => $.ajax({
  method: 'GET', url: 'api/bookings'
});

export const createBooking = booking => $.ajax({
  method: 'POST', url: `api/spots/${booking.spotId}/bookings`,
  data: { booking: payload(booking) }
});

export const deleteBooking = id => $.ajax({
  method: 'DELETE', url: `api/bookings/${id}`
});

const payload = booking => ({
  start_date: booking.startDate,
  end_date: booking.endDate,
  guests: booking.guests,
  booker_id: booking.bookerId,
  spot_id: booking.spotId
});
