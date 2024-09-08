class CreateCourseUnits < ActiveRecord::Migration[7.0]
  def change
    create_table :course_units do |t|
      t.integer :course_id
      t.integer :unit_id

      t.timestamps
    end
  end
end
