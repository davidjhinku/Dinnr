class Api::FavoritesController < ApplicationController

    def create
        @favorite = Favorite.new(favorite_params)

        if @favorite.save!
            # @restaurant = @favorite.restaurant
            # @reviews = @restaurant.reviews

            render :create
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = Favorite.find_by(id: params[:id])

        @favorite.destroy

        # render json: @favorite
        render :create
    end

    private
    def favorite_params
        params.require(:favorite).permit(:user_id, :restaurant_id)
    end

end