class Api::MusicianProfilesController < ApplicationController

    def create
        musician_profile = MusicianProfile.create(musician_profile_params)
        render json: musician_profile, status: :created
    end

    def update
        if current_user.type == "Musician"
            musician_profile = MusicianProfile.find_by(id: params[:id])
                if musician_profile
                    musician_profile.update(musician_profile_params)
                    render json: musician_profile
                else
                    render json: { error: "Profile not found" }, status: :not_found
                end
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

    private

    def musician_profile_params
        params.permit(:location, :instrument, :bio, :media_url, :musician_id, :email)
    end

end
