class Api::RestaurantsController < ApplicationController
    def index
        if !params[:search]
            @restaurants = Restaurant.all
        else 
            @restaurants = Restaurant.search(search_terms)
        end
        render :index
    end

    def show
        @restaurant = Restaurant.includes(menus: :items).with_attached_photos.find(params[:id])
        @reviews = @restaurant.reviews
        render :show

    end

    private
    def search_terms
        params.require(:search).permit(:date, :time, :party_size, :wildcard)
    end
end