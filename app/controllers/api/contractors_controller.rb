class Api::ContractorsController < ApplicationController
    skip_before_action :confirm_authentication
    
    def index
        contractors = Contractor.all
        render json: contractors
    end

    def create
        contractor = Contractor.create(user_params)
        if contractor.valid?
            session[:user_id] = contractor.id
            render json: contractor, status: :ok
        else
            render json: { error: contractor.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        contractor = Contractor.find_by(id: params[:id])
        if contractor
            contractor.destroy
            head :no_content
        else
            render json: { error: "Contractor not found" }, status: :not_found
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end
