class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login!(@user)
            render 'api/users/show.json.jbuilder'
        else
            render json: ["Your email and password don't match. Please try again."], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout!
            render 'api/users/show.json.jbuilder'
        else
            render json: ['Not logged in'], status: 404
        end
    end
end
