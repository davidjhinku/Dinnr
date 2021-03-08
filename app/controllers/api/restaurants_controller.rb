class Api::RestaurantsController < ApplicationController
    def index
        if !params[:search]
            @restaurants = Restaurant.includes(:reviews).all
            # @restaurants = Restaurant.all
        else 
            @restaurants = Restaurant.search(search_terms)
        end
        render :index
    end

    def show
        @restaurant = Restaurant.includes(menus: :items).with_attached_photos.find(params[:id])
        # @restaurant = Restaurant.includes(:reviews).includes(menus: :items).with_attached_photos.find(params[:id])
        @reviews = @restaurant.reviews
        # @reviewsData = Review.reviewData(@reviews)
        # debugger
        render :show

    end

    private
    def search_terms
        params.require(:search).permit(:date, :time, :party_size, :wildcard)
    end
end