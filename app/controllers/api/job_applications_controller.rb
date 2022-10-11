class Api::JobApplicationsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        job_applications = JobApplication.all
        render json: job_applications
    end

    def create
        job_application = JobApplication.create(job_application_params)
        render json: job_application, status: :created
    end

    private

    def job_application_params
        params.permit(:resume, :cover_letter, :accepted, :musician_id, :job_id)
    end
end
