class Api::MusiciansController < ApplicationController
    
    skip_before_action :confirm_authentication

    def index
        if current_user
            musicians = Musician.all
            render json: musicians, include: :musician_profile
        else
            render json: { error: 'unauthorized' }, status: :unauthorized
        end
    end

    def create
        musician = Musician.create(user_params)
        if musician.valid?
            session[:user_id] = musician.id
            render json: musician, status: :ok
        else
            render json: { error: musician.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        if current_user.type == "Musician"
           musician = Musician.find_by(id: params[:id])
           if musician
                musician.update(user_params)
                render json: musician
           else
                render json: { error: "Profile not found" }, status: :not_found
           end
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

    def destroy
        if current_user.type == "Musician"
            musician = Musician.find_by(id: params[:id])
            if musician
                musician.destroy
                render json: musician
            else
                render json: { error: "Profile not found" }, status: :not_found
            end
        else
            render json: { error: "Unauthorized" }, status: :unauthorized
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end
end
