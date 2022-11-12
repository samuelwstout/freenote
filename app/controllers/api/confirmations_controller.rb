class Api::ConfirmationsController < ApplicationController
    skip_before_action :confirm_authentication

    def call
        user = User.find_by(email: params[:_json])
        if user
            render json: {
                alert: "If this user exists, we have sent you a password reset email."
            }
            user.send_email_confirmation
        else
            #this sends regardless of whether there's an email in database for security reasons
            render json: {
                alert: "If this user exists, we have sent you a password reset email."
            }
        end
    end

    def submit
        user = User.find_by(confirm_token: params[:confirm_token], email: params[:email])
        if user.present? && user.confirm_token?
            render json: {
                alert: "Your email is confirmed!"
              }
            session[:user_id] = user.id
            user.email_activate
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end    
    end

end
