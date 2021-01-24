class Api::RestaurantsController < ApplicationController
    def index
        @restaurants = Restaurant.all
        # need to .includes with reviews
        render :index
    end

    def show
        @restaurant = Restaurant.with_attached_photos.find(params[:id])
        # need to .includes with business_hours, menus, 
        render :show
    end
end