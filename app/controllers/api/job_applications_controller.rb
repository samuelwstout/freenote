class Api::JobApplicationsController < ApplicationController

    def index
        job_applications = JobApplication.all
        render json: job_applications, include: :application_response
    end

    def create
        job_application = JobApplication.create(job_application_params)
        render json: job_application, status: :created
    end

    private

    def job_application_params
        params.permit(:cover_letter, :status, :musician_id, :job_id)
    end
end
