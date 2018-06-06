class Api::BookingsController < ApplicationController
  before_action :require_login

  def create
    booking = Booking.new(booking_params)
    booking.booker_id = current_user.id
    booking.spot_id = params[:spot_id]
    if booking.save
      render :index
    else
      render json: booking.errors.full_messages, status: 422
    end
  end

  def index
    @bookings = Booking.all
  end

  def destroy
    booking = Booking.find(params[:id])
    booking.destroy
    render :index
  end

  private
  def booking_params
    params.require(:booking).permit(:begin_date, :end_date, :guests)
  end
end