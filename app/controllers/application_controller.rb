class ApplicationController < ActionController::Base
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    skip_before_action :verify_authenticity_token
    
    before_action :confirm_authentication

    private
  
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end
  
    def logged_in?
      !!current_user
    end
  
    def confirm_authentication
      render json: { error: "You must be logged in to do that." }, status: :unauthorized unless logged_in?
    end
  
    def not_found(e)
      render json: { error: e.message }, status: :not_found
    end
end
