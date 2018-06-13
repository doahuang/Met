class Api::SpotsController < ApplicationController
  before_action :require_login, except: %i(show index)

  def create
    @spot = Spot.new(spot_params)
    @spot.owner_id = current_user.id

    # to change
    lat = 37.7758
    lng = -122.435
    lat += rand(-0.03..0.03).round(4)
    lng += rand(-0.03..0.03).round(4)
    @spot.latitude = lat
    @spot.longitude = lng
    #

    if @spot.save
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def update
    @spot = current_user.spots.find(params[:id])
    if @spot.update(spot_params)
      render :show
    else
      render json: @spot.errors.full_messages, status: 422
    end
  end

  def show
    @spot = Spot.find(params[:id])
  end

  def index
    bounds = params[:bounds]
    # debugger
    @spots = bounds ? Spot.in_bounds(bounds) : Spot.all
  end

  private
  def spot_params
    params.require(:spot).permit(
      :name, :image_url, :latitude, :longitude,
      :landscape, :size, :price, :description
    )
  end
end
