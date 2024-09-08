class CoursesController < ApplicationController
    def index
        courses = Course.all
        render json: courses, status: :ok
    end
    
    def show
        course = Course.find_by!(id: params[:id])
        render json: course, status: :ok
    end

    def create
        course = Course.create!(course_params)
        render json: course, status: :created
    end

    def destroy
        course = Course.find_by!(id: params[:id])
        course.destroy
        head :no_content
    end
    

    private
    
    def course_params
        params.require(:course).permit(:name, :description, :fee)
    end
end
