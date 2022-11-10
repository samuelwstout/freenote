class Api::ConfirmationsController < ApplicationController
    skip_before_action :confirm_authentication

    def request
        current_user.send_email_confirmation
    end

    def submit
        user = User.find_by(confirm_token: params[:confirm_token], email: params[:email])
        if user
            user.confirm_email
            session[:user_id] = user.id
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end    
    end

end
