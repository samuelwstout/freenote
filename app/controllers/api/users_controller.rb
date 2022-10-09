class Api::UsersController < ApplicationController
  skip_before_action :confirm_authentication
  
  # get '/api/me'
  def show
    if current_user
      if current_user.type == "Contractor"
        render json: current_user, include: :jobs, status: :ok
      end
      if current_user.type == "Musician"
        render json: current_user, include: :job_applications, status: :ok
      end
    else
      render json: { error: 'No active session' }, status: :unauthorized
    end
  end
  
end
