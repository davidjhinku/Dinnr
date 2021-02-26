class Api::ReservationsController < ApplicationController

    def index
        if params[:search][:userId] #to grab reservations for a user
            @reservations = Reservation.where(user_id: params[:search][:userId])
            render :show
        else #to grab all avail timeslots
            @restId = params[:search][:restId]
            @timeslots = Reservation.available(search_terms)

            render :timeslot
            # render json: @timeslots
            # debugger
            # render json: {params[:search][:restId]: @timeslots}
        end
        
    end

    def show
        @reservation = Reservation.find(params[:id])
        render :show
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save!
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def update
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.update(reservation_params)
            render :show
        else
            render json: @reservation.errors.full_messages, status: 422
        end
    end

    def destroy
        @reservation = Reservation.find_by(id: params[:id])            
        @reservation.destroy
        render :show
    end

    private
    def reservation_params
        params.require(:reservation).permit(:date, :time, :party_size, :user_id, :restaurant_id, :phone, :email, :occasion, :special_request)
    end

    def search_terms
        params.require(:search).permit(:date, :time, :restId)
    end
end