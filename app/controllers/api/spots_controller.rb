class Api::SpotsController < ApplicationController
  before_action :require_login, except: %i(show index)

  def create
    @spot = Spot.new(spot_params)
    @spot.owner_id = current_user.id
    @spot.latitude = rand(0.00..100.00).round(2)
    @spot.longitude = rand(0.00..100.00).round(2)
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
    @spots = Spot.all
  end

  private
  def spot_params
    params.require(:spot).permit(
      :name, :image_url, :latitude, :longitude,
      :landscape, :size, :price, :description
    )
  end
end
