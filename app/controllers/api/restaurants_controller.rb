class Api::RestaurantsController < ApplicationController
    def index
        # debugger

        if !params[:search]

            # debugger
            @restaurants = Restaurant.all
        else

            # debugger
            @restaurants = Restaurant.search(search_terms)
        end
        # need to .includes with reviews

        # debugger
        render :index
    end

    def show
        # @restaurant = Restaurant.with_attached_photos.find(params[:id])
        @restaurant = Restaurant.includes(menus: :items).with_attached_photos.find(params[:id])
        
        # debugger
        render :show
    end

    private
    def search_terms
        params.require(:search).permit(:date, :time, :party_size, :wildcard)
    end
end