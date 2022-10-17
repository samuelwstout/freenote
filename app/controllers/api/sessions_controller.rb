class Api::SessionsController < ApplicationController
  
  skip_before_action :confirm_authentication

  # post '/login'
  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
        if user.type == "Musician"
        render json: user, include: :musician_profile, status: :ok
        else
        render json: user, status: :ok
        end
    else
      render json: { error: 'invalid credentials' }, status: :unauthorized
    end
  end

  # delete '/logout'
  def destroy
    session.delete(:user_id)
  end
end
