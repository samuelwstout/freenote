class Api::MusiciansController < ApplicationController
    
    skip_before_action :confirm_authentication
    skip_before_action :verify_authenticity_token

    def index
        musicians = Musician.all
        render json: musicians
    end

    def create
        musician = Musician.create(user_params)
        if musician.valid?
            session[:user_id] = musician.id
            render json: musician, status: :ok
        else
            render json: { error: musician.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        musician = Musician.find_by(id: params[:id])
        if musician
            musician.destroy
            head :no_content
        else
            render json: { error: "Musician not found" }, status: :not_found
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end
