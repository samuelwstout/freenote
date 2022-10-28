class Api::ApplicationResponsesController < ApplicationController

    def create
        application_response = ApplicationResponse.create(application_response_params)
        render json: application_response, status: :created
    end

    private

    def application_response_params
        params.permit(:status, :job_application_id)
    end
end
