class Api::ReservationsController < ApplicationController

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

    private
    def reservation_params
        params.require(:reservation).permit(:date, :time, :party_size, :user_id, :restaurant_id)
    end

end