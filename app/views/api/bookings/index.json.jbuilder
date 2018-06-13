  @bookings.each do |booking|
  json.set! booking.id do
    json.partial! booking, booking: booking
    json.spot booking.spot
  end
end
