class Api::ApplicationResponsesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        application_response = ApplicationResponse.create(application_response_params)
        render json: application_response, status: :created
    end

    private

    def application_response_params
        params.permit(:status, :comment, :job_application_id)
    end
end
