class Api::ReviewsController < ApplicationController

    def index
    end

    def create
        @review = Review.new(review_params)

        if @review.save!
            render :create
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy

        render :create
    end

    private
    def review_params
        params.require(:review).permit(:overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id)
    end
end