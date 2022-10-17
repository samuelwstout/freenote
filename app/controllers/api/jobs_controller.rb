class Api::JobsController < ApplicationController

    def index
        jobs = Job.all
        render json: jobs
    end

    def create
        job = Job.create(job_params)
        render json: job, status: :created
    end

    private

    def job_params
        params.permit(:title, :description, :date, :location, :budget, :contractor_id)
    end

end
