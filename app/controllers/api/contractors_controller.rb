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
        if current_user.type == "Contractor"
            contractor = Contractor.find_by(id: params[:id])
            if contractor
                 contractor.update(user_params)
                 render json: contractor
            else
                 render json: { error: "Profile not found" }, status: :not_found
            end
         else
             render json: { error: "Unauthorized"}, status: :unauthorized
         end
    end

    def destroy
        if current_user.type == "Contractor"
            contractor = Contractor.find_by(id: params[:id])
            if contractor
                contractor.destroy
                render json: contractor
            else
                render json: { error: "Profile not found" }, status: :not_found
            end
        else
            render json: { error: "Unauthorized"}, status: :unauthorized
        end
    end

  private

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
    end
end
