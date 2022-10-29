class Api::ContractorsController < ApplicationController

    skip_before_action :confirm_authentication

    def create
        contractor = Contractor.create(user_params)
        if contractor.valid?
            session[:user_id] = contractor.id
            render json: contractor, status: :ok
        else
            render json: { error: 'All fields must be filled and passwords must match.' }, status: :unprocessable_entity
        end
    end

    def update
        contractor = Contractor.find_by(id: params[:id])
        if contractor
            contractor.update(user_params)
            render json: contractor
        else
            render json: { error: "Profile not found" }, status: :not_found
        end
    end

    def destroy
        contractor = Contractor.find_by(id: params[:id])
        if contractor
            contractor.destroy
            render json: contractor
        else
            render json: { error: "Profile not found" }, status: :not_found
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end
