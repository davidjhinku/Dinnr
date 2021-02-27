class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        @reservations = @user.reservations
        @restaurants = Restaurant.all
        
        # debugger find a method to only get restaurants needed
        render 'api/users/data.json.jbuilder'
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            # @reservations = @user.reservations
            render 'api/users/show.json.jbuilder'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :primary_location, :password)
    end
end
