class Api::PasswordResetsController < ApplicationController

    def create
        user = User.find_by_email(params[:email])
        user.send_password_reset if user
        flash[:notice] = 'Email sent with password reset instructions.'
        redirect_to new_session_path
    end
    
end
