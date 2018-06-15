class Api::SpotsController < ApplicationController
  before_action :require_login, except: %i(show index)

  def create
    @spot = Spot.new(spot_params)
    @spot.owner_id = current_user.id
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
    if bounds
      @spots = Spot.in_bounds(bounds)
    else
      word = params[:query]
      @spots = word ? Spot.search(word) : Spot.all
    end
  end

  private
  def spot_params
    params.require(:spot).permit(:name, :image_url, :location,
                                 :latitude, :longitude, :landscape,
                                 :size, :price, :description)
  end

  def bounds
    params[:bounds]
  end
end
