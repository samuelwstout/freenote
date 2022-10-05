class CreateJobApplications < ActiveRecord::Migration[7.0]
  def change
    create_table :job_applications do |t|
      t.string :resume_url
      t.string :cover_letter_url
      t.boolean :accepted

      t.timestamps
    end
  end
end
