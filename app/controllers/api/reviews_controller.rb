class Api::ReviewsController < ApplicationController
  before_action :require_login, except: :index

  def create
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    @review.spot_id = params[:spot_id]
    if @review.save
      render 'api/reviews/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: {}
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body)
  end
end
