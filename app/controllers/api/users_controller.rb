class Api::UsersController < ApplicationController
  skip_before_action :confirm_authentication
  
  # get '/api/me'
  def show
    if current_user
      render json: current_user, include: :jobs, status: :ok
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end
  
end
