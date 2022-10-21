class Api::JobsController < ApplicationController
    
    def index
        jobs = Job.all
        render json: jobs
    end

    def create
        job = Job.create(job_params)
        render json: job, status: :created
    end

    def update
        job = Job.find_by(id: params[:id])
        if job
            job.update(job_params)
            render json: job
        else
            render json: { error: "Job not found" }, status: :not_found
        end
    end

    def destroy
        job = Job.find_by(id: params[:id])
        if job
            job.destroy
            render json: job
        else
            render json: { error: "Job not found" }, status: :not_found
        end
    end

    private

    def job_params
        params.permit(:title, :description, :date, :location, :budget, :contractor_id)
    end

end
