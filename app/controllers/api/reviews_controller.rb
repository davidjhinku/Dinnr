class Api::ReviewsController < ApplicationController

    def index
    end

    def create
    end

    def destroy
    end

    private
    def review_params
        params.require(:review).permit(:overall, :food, :service, :ambiance, :value, :noise, :review, :recommended, :nickname, :reservation_id, :restaurant_id, :user_id)
    end
end