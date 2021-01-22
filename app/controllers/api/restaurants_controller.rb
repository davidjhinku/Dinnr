class Api::UsersController < ApplicationController
    def index
        @restaurants = Restaurant.all
        # need to .includes with reviews
        render :index
    end

    def show
        @restaurant = Restaurant.find(params[:id])
        # need to .includes with business_hours, menus, 
        render :show
    end
end