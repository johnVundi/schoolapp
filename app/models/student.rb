class Student < ApplicationRecord
    belongs_to :course, optional: true
    has_secure_password
end
