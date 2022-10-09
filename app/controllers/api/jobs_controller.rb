class Api::JobsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def create
        job = Job.create(job_params)
        render json: job, status: :created
    end

    private

    def job_params
        params.permit(:title, :description, :date, :location, :budget, :contractor_id)
    end

end
