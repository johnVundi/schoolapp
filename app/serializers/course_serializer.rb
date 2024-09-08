class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :fee
  has_many :units
end
