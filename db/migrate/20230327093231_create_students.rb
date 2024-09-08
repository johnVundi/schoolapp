class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :name
      t.string :admission_number
      t.string :email
      t.integer :id_number
      t.string :gender
      t.integer :course_id
      t.integer :fee_paid
      t.string :password_digest
      t.timestamps
    end
  end
end
