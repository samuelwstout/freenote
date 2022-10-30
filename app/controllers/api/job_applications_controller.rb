class Api::JobApplicationsController < ApplicationController

    def index
        if current_user
            job_applications = JobApplication.all
            render json: job_applications, include: :application_response
        end
    end

    def create
        if current_user.type == "Musician"
            job_application = JobApplication.create(job_application_params)
            render json: job_application, status: :created
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

    private

    def job_application_params
        params.permit(:cover_letter, :status, :musician_id, :job_id)
    end
end
