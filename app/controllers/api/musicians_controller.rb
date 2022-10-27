class Api::MusiciansController < ApplicationController
    
    skip_before_action :confirm_authentication

    def index
        musicians = Musician.all
        render json: musicians, include: :musician_profile
    end

    def create
        musician = Musician.create(user_params)
        if musician.valid?
            session[:user_id] = musician.id
            render json: musician, include: :job_applications, status: :ok
        else
            render json: { error: 'All fields must be filled and passwords must match.' }, status: :unprocessable_entity
        end
    end

    def update
        musician = Musician.find_by(id: params[:id])
        if musician
            musician.update(user_params)
            render json: musician
        else
            render json: { error: "Profile not found" }, status: :not_found
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end
