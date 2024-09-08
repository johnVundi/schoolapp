class UserSerializer < ActiveModel::Serializer
    attributes :id, :name, :email, :fee_paid, :gender, :admission_number, :id_number
    belongs_to :course
  
    def course
      course = object.course
      if course.present?
        {
          id: course.id,
          name: course.name,
          description: course.description,
          fee: course.fee,
          units: course.units.map do |unit|
            {
              id: unit.id,
              name: unit.name,
              description: unit.description
            }
          end
        }
      else
        nil
      end
    end
  end
  