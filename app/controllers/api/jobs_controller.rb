class Api::JobsController < ApplicationController
    
    def index
        if current_user
            jobs = Job.all
            render json: jobs
        end
    end

    def create
        if current_user.type == "Contractor"
            job = Job.create(job_params)
            render json: job, status: :created
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end   
    end

    def update
        if current_user.type == "Contractor"
            job = Job.find_by(id: params[:id])
            if job
                job.update(job_params)
                render json: job
            else
                render json: { error: "Job not found" }, status: :not_found
            end
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

    def destroy
        if current_user.type == "Contractor"
            job = Job.find_by(id: params[:id])
            if job
                job.destroy
                render json: job
            else
                render json: { error: "Job not found" }, status: :not_found
            end
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

    private

    def job_params
        params.permit(:title, :description, :date, :location, :budget, :contractor_id)
    end

end
