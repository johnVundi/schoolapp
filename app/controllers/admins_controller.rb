class AdminsController < ApplicationController
    def logged_in
      admin = Admin.find_by(id: session[:admin_id])
      if admin
        render json: admin, status: :ok
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
    def index
      admin = Admin.all
      render json: admin, status: :ok
    end
  
    def create
        admin = Admin.new(admin_params)
        if admin.save
        session[:admin_id] = admin.id
        render json: admin, status: :created
        else
        render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
        end

    end
  
    def signup
      admin = Admin.new(admin_params)
      if admin.save
        session[:admin_id] = admin.id
        render json: admin, status: :created
      else
        render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    def show
      student = Student.find_by(id: params[:id])
      render json: student, serializer: UserSerializer, status: :ok
    end
  
    def update
      student = Student.find(params[:id])
      student.update!(student_params)
      render json: student, status: :ok
    end

    def update
      admin = Admin.find(params[:id])
      if admin.update(admin_params)
        render json: admin, status: :ok
      else
        render json: { errors: admin.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
  
    def destroy
      student = Student.find(params[:id])
      student.destroy!
      render json: student, status: :ok
    end
  
    private
  
    def admin_params
      params.require(:admin).permit(:name, :email, :password)
    end
  end
  