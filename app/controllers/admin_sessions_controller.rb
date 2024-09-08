class Admins::SessionsController < ApplicationController

    # Log in an admin
    def create
      admin = Admin.find_by(email: params[:email])
  
      if admin && admin.authenticate(params[:password])
        session[:admin_id] = admin.id
        render json: { message: "Logged in successfully" }, status: :ok
      else
        render json: { error: "Invalid email or password" }, status: :unauthorized
      end
    end
  
    # Log out an admin
    def destroy
      session.delete(:admin_id)
      render json: { message: "Logged out successfully" }, status: :ok
    end
  
  end
  