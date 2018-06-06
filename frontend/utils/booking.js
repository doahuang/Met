export const fetchBookings = () => $.ajax({
  method: 'GET', url: 'api/bookings'
});

export const createBooking = booking => $.ajax({
  method: 'POST', url: 'api/bookings', data: { booking }
});

export const deleteBooking = booking => $.ajax({
  method: 'DELETE', url: `api/bookings/${booking.id}`
});
