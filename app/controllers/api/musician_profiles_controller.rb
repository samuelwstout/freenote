class Api::MusicianProfilesController < ApplicationController

    def create
        musician_profile = MusicianProfile.create(musician_profile_params)
        render json: musician_profile, status: :created
    end

    private

    def musician_profile_params
        params.permit(:location, :instrument, :bio, :media_url, :musician_id)
    end

end
